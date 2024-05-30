import {
  RoundOneCheck,
  cvAnalysist,
  extractCommonInfo,
  extractSkill,
  translate
} from 'src/GPT/roles';
import { checkIsJSON, preProcessText } from './formatData';
import sendChatGPTRequest, { getEmbedding } from 'src/GPT/sendChatGPTRequest';
import { getFileByUrl } from 'src/common/firebaseService';
import pdfToText from 'react-pdftotext';
import { User } from 'src/modules/users/model';
import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
import { Application } from 'src/modules/application/model';
import { Job } from 'src/modules/jobs/model';
import { compareDegrees, compareExperience } from './compareEnum';
import dayjs from 'dayjs';
import { dot } from 'mathjs';
import { loadKeywords } from './keywords';

export const FAIL_SCORE = 0; // < 30
export const LOW_SCORE = 30; // 30 - 80
export const NORMAL_SCORE = 80; // 80 - 110
export const HIGH_SCORE = 110; // higher than 110

export const ratingStar = (score: number) => {
  return score >= HIGH_SCORE
    ? 3
    : score >= NORMAL_SCORE
    ? 2
    : score >= LOW_SCORE
    ? 1
    : 0;
};
export type ProfileTypeInfo = {
  personal_information: User;
  online_profile?: OnlineProfile;
  attached_document?: AttachedDocument;
  application: Partial<Omit<Application, 'applicationType'>> & {
    id: number;
    applicationType: string;
    matchingScore: number;
  };
};

export type ProfileApplicationType = {
  id: number;
  employee_Profile: ProfileTypeInfo;
  employer_Requirement: Partial<Job>;
};

const fetchAndProcessCVData = async (dataToAnalyze, dataProcessor) => {
  return Promise.all(
    dataToAnalyze.map(async (data) => ({
      ...data,
      employee_Profile: await dataProcessor(data.employee_Profile)
    }))
  );
};

const filterAndMapProfiles = (dataList) => {
  return dataList
    .filter((data) => data.employee_Profile)
    .map(({ employee_Profile, employer_Requirement }) => ({
      employee_Profile,
      employer_Requirement
    }));
};

const preprocessText = (text) => {
  if (!text) return null;

  const preprocessedText = text
    .replace(/[^\w\s,+()@.:\/-]/g, '')
    .replace(/\s+/g, ' ');

  return preprocessedText ? preprocessedText : null;
};

const findMatchedProfile = (
  profileId,
  cvEnclosedProfileList,
  attachProfileList
) => {
  return (
    cvEnclosedProfileList.find(
      (cvItem) => cvItem.employee_Profile.application.id === profileId
    ) ||
    attachProfileList.find(
      (attachItem) => attachItem.employee_Profile.application.id === profileId
    )
  );
};

export const preprocessJobData = (job) => ({
  ...job,
  jobDescription: preProcessText(job?.jobDescription),
  jobRequirements: preProcessText(job?.jobRequirements),
  benefits: preProcessText(job?.benefits)
});

export const preprocessProfileData = (profile) => ({
  ...profile,
  personal_information: {
    dob: profile?.employee?.user?.dob,
    sex: profile?.employee?.user?.sex
  }
});

export const matchProfileById = (
  analyzedProfile,
  cvEnclosedProfileList,
  attachProfileList
) => {
  return analyzedProfile.map((item) => {
    const foundItem = findMatchedProfile(
      item.id,
      cvEnclosedProfileList,
      attachProfileList
    );
    if (foundItem) return { ...item, ...foundItem };
    return item;
  });
};

export const firstRoundForGeneralInfo = (job, profile) => {
  // console.log('profile', profile);

  const { personal_information, online_profile, attached_document } = profile;

  const birthday = dayjs(personal_information?.dob, 'YYYY-MM-DD').isValid()
    ? dayjs(personal_information?.dob, 'YYYY-MM-DD')
    : dayjs(personal_information?.dob, 'DD-MM-YYYY');
  const age = dayjs().year() - birthday.year();
<<<<<<< HEAD
  console.log(age);
  debugger;
||||||| 0ddf7a2
  console.log(age);

=======

>>>>>>> dev
  if (
    (job?.sex !== null &&
      job?.sex !== 'Tất cả' &&
      job?.sex !== personal_information?.sex) ||
    job?.minAge > age ||
    job?.maxAge < age
  )
    return -10;

  if (online_profile && !isProfileQualified(online_profile, job)) return -10;

  if (attached_document && !isProfileQualified(attached_document, job))
    return -10;

  return 30;
};

const isProfileQualified = (profile, job) => {
  const { profession, degree, experience } = profile;

  const employeeProfessionList = profession
    .split(',')
    .map((item) => item.trim());
  const jobProfessionList = job.profession
    .split(',')
    .map((item) => item.trim());
  if (!employeeProfessionList.some((item) => jobProfessionList.includes(item)))
    return false;

  if (compareDegrees(degree, job?.degree) < 0) return false;

  if (compareExperience(experience, job?.experience) < 0) return false;

  return true;
};

const handleRoundOne = async (
  resetMatchingScoreList: ProfileApplicationType[],
  setAnalyzedProfile: (data: ProfileApplicationType[]) => Promise<void>,
  handleAnalyzeResult: (result: any[]) => Promise<void>,
  handleGoToAnalyzeResult: (signal: boolean, resultData: any) => void
) => {
  console.log('Start round 1');
  const attachedDocumentDataList = resetMatchingScoreList.filter(
    (item) => item.employee_Profile.attached_document?.CV
  );
  const cvEnclosedDataList = resetMatchingScoreList.filter(
    (item) =>
      !item.employee_Profile?.online_profile &&
      !item.employee_Profile.attached_document
  );

  const attachedDocumentList = await fetchAndProcessCVData(
    attachedDocumentDataList,
    readCVData
  );
  const cvEnclosedList = await fetchAndProcessCVData(
    cvEnclosedDataList,
    readEnclosedCVData
  );

  const attachProfileList = filterAndMapProfiles(attachedDocumentList);
  const cvEnclosedProfileList = filterAndMapProfiles(cvEnclosedList);

  const cvContentProfile = matchProfileById(
    resetMatchingScoreList,
    cvEnclosedProfileList,
    attachProfileList
  );

  const extractPromise = async () => {
    return Promise.all(
      cvEnclosedProfileList.map(async (item) => {
        const result = await sendChatGPTRequest(extractCommonInfo, [
          item?.employee_Profile?.application?.CV
        ]);

        const validResult = result.filter((res) => checkIsJSON(res));

        const extractedResult = validResult.map((res) => {
          const jsonRes = JSON.parse(res);
          return {
            employee_Profile: jsonRes,
            employer_Requirement: {
              profession: item?.employer_Requirement?.profession,
              degree: item?.employer_Requirement?.degree,
              experience: item?.employer_Requirement?.experience
            },
            id: item?.employee_Profile?.application?.id
          };
        });
        // result[0] + '\n -id: ' + item?.employee_Profile?.application?.id;
        return extractedResult;
      })
    );
  };

  const commonInfo = await extractPromise();

  const messagesToSend = commonInfo.map((item) => {
    return `
    - application_id: ${item[0]?.id}
    - Yêu cầu tuyển dụng: ngành nghề: [${item[0]?.employer_Requirement?.profession}]; trình độ: ${item[0]?.employer_Requirement?.degree}; kinh nghiệm: ${item[0]?.employer_Requirement?.experience};
    - Thông tin hồ sơ xin việc: ngành nghề: ${item[0]?.employee_Profile?.profession}; trình độ ${item[0]?.employee_Profile?.degree}; kinh nghiệm ${item[0]?.employee_Profile?.experience}
    `;
  });

  const response = await sendChatGPTRequest(
    RoundOneCheck,
    messagesToSend
  ).catch(() => []);

  const result = Array.isArray(response)
    ? response?.filter((item) => checkIsJSON(item))
    : [];
  setAnalyzedProfile(cvContentProfile);
  handleGoToAnalyzeResult(true, result);
};

const handleRoundTwo = async (
  passRoundProfiles,
  handleAnalyzeResult: (result: any[]) => Promise<void>
) => {
  console.log('Start round 2');

  const dataSendToGPT = passRoundProfiles.map((item) => {
    let profile;
    if (item?.employee_Profile?.online_profile) {
      const onlineProfile = item?.employee_Profile?.online_profile;
      profile = {
        jobTitle: onlineProfile.jobTitle,
        skills: onlineProfile.skills,
        another_degree: (onlineProfile.another_degree || []).map(
          (degree) => degree.Name
        ),
        education_informations: (
          onlineProfile.education_informations || []
        ).map((education) => education.degreeName),
        work_experiences: (onlineProfile.work_experiences || []).map(
          (experience) => ({
            jobTitle: experience?.jobTitle,
            jobDescription: experience?.jobDescription
          })
        )
      };
    } else if (item?.employee_Profile?.attached_document) {
      const attachedDocument = item?.employee_Profile?.attached_document;
      profile = {
        skills: attachedDocument.skills,
        CV: attachedDocument.CV
      };
    } else {
      profile = item?.employee_Profile?.application.CV;
    }
    return {
      employer_Requirement: {
        requiredSkills: item.employer_Requirement.requiredSkills
      },
      employee_Profile: {
        profile: profile,
        application_id: item?.employee_Profile?.application.application_id
      }
    };
  });

  const skillList = await Promise.all(
    dataSendToGPT?.map(async (item) => {
      const extractRequiredSkillList = dataSendToGPT?.map(
        (data) => data?.employee_Profile?.profile
      );
      const skillsList = await sendChatGPTRequest(
        extractSkill,
        extractRequiredSkillList,
        null,
        { '58': 5, '60': 5 }
      );
      return {
        id: item.employee_Profile.application_id,
        employee_Profile: loadKeywords(skillsList)?.split(',') || '',
        employer_Requirement:
          item.employer_Requirement.requiredSkills.split(',') || ''
      };
    })
  );

  const responses = (await getEmbedding(skillList)) || [];

  const result = responses?.map((item) => {
    const matchingSkills = item?.employer_Requirement?.filter((require) =>
      item?.employee_Profile?.some((skills) => {
        if (skills?.result?.length === require?.result?.length) {
          return dot(skills.result, require.result) > 0.6;
        } else {
          console.error('Vectors must have the same number of dimensions');
          return false;
        }
      })
    );
    const matchPercentage = matchingSkills
      ? (100 / item?.employer_Requirement?.length) * matchingSkills.length
      : 0;
    return {
      id: item.id,
      result: matchPercentage
    };
  });

  handleAnalyzeResult(result.map((res) => JSON.stringify(res)));
};

const handleRoundThree = async (
  passRoundProfiles,
  handleAnalyzeResult: (result: any[]) => Promise<void>
) => {
  console.log('Start round 3');

  try {
    // Step 1: Retrieve keywords for profiles
    const profilesWithKeywords = await Promise.all(
      passRoundProfiles.map(async (item) => {
        if (
          item?.employee_Profile?.application?.applicationType !== 'Nộp nhanh'
        ) {
          return item;
        } else {
          const keywords = await loadKeywords(
            await sendChatGPTRequest(cvAnalysist, [
              item?.employee_Profile?.application?.CV
            ])
          );
          return {
            ...item,
            employee_Profile: {
              application: {
                keywords
              }
            }
          };
        }
      })
    );

    // console.log('Profiles with keywords:', profilesWithKeywords);

    // Step 2: Calculate similarity scores between profiles and job requirements
    const response = await getEmbedding(
      profilesWithKeywords.map((item) => ({
        id: item.id,
        employee_Profile:
          item?.employee_Profile?.application.keywords?.split(','),
        employer_Requirement: item?.employer_Requirement?.keywords?.split(',')
      }))
    );

    // Step 3: Analyze results and provide hints
    const resultList = await Promise.all(
      response?.map(async (item) => {
        let score = item?.employee_Profile?.reduce((acc, profile) => {
          const hasMatch = item?.employer_Requirement?.some((requirement) => {
            console.log('vector', profile.result, typeof profile.result);

            const cosineSimilarity = dot(profile.result, requirement.result);
            return cosineSimilarity > 0.6;
          });
          return hasMatch ? acc + 5 : acc;
        }, 0);

        const lackOfSkillsList =
          item?.employer_Requirement
            ?.filter(
              (require) =>
                !item?.employee_Profile?.some(
                  (skills) => dot(skills.result, require.result) > 0.6
                )
            )
            ?.map((require) => require.word) || [];

        const hints =
          lackOfSkillsList.length > 0
            ? `Để tăng tỉ lệ đậu bạn có thể trang bị thêm kĩ năng: ${[
                ...new Set(lackOfSkillsList)
              ]
                .slice(0, 4)
                .join(', ')}`
            : 'Hồ sơ của bạn đã đáp ứng yêu cầu của tin tuyển dụng này';

        return {
          id: item.id,
          result: score,
          hints: hints
        };
      })
    );

    // Step 4: Convert results to list and pass to the handler function
    const list = resultList.map((result) => JSON.stringify(result));
    await handleAnalyzeResult(list);
  } catch (error) {
    console.error('Error in round 3 analysis:', error);
    // Handle or log the error appropriately
  }
};

export const fetchDataFromUrl = async (url, type) => {
  try {
    const filePath = await getFileByUrl(url);
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error('Failed to fetch file');
    }
    const blob = await response.blob();
    return pdfToText(blob);
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const readCVData = async (employee_Profile) => {
  if (employee_Profile?.attached_document) {
    const text = await fetchDataFromUrl(
      employee_Profile.attached_document.CV,
      'attached_document'
    );
    const preprocessedText = preprocessText(text);

    return preprocessedText
      ? {
          ...employee_Profile,
          attached_document: {
            ...employee_Profile.attached_document,
            CV: preprocessedText
          }
        }
      : null;
  }
  return null;
};

export const readEnclosedCVData = async (employee_Profile) => {
  if (
    employee_Profile?.application?.applicationType === 'Nộp nhanh' &&
    employee_Profile?.application?.CV
  ) {
    const text = await fetchDataFromUrl(
      employee_Profile.application.CV,
      'enclosed_CV'
    );
    const preprocessedText = preprocessText(text);

    if (preprocessedText) {
      return {
        ...employee_Profile,
        application: { ...employee_Profile.application, CV: preprocessedText }
      };
    }

    return employee_Profile;
  }
  return null;
};

export const review = async ({
  round,
  handleAnalyzeResult,
  setIsAnalyzing,
  setAnalyzedProfile,
  passRoundProfiles,
  resetMatchingScoreList,
  handleGoToAnalyzeResult
}: {
  round: number;
  handleAnalyzeResult: (result: any[]) => Promise<void>;
  setIsAnalyzing: (data: boolean) => void;
  setAnalyzedProfile?: (data: ProfileApplicationType[]) => Promise<void>;
  passRoundProfiles?: ProfileApplicationType[];
  resetMatchingScoreList?: ProfileApplicationType[];
  handleGoToAnalyzeResult?: any;
}) => {
  setIsAnalyzing(true);

  switch (round) {
    case 1:
      await handleRoundOne(
        resetMatchingScoreList,
        setAnalyzedProfile,
        handleAnalyzeResult,
        handleGoToAnalyzeResult
      );
      break;
    case 2:
      await handleRoundTwo(passRoundProfiles, handleAnalyzeResult);
      break;
    case 3:
      await handleRoundThree(passRoundProfiles, handleAnalyzeResult);
      break;
    default:
      break;
  }
};

export const parseResponseJSONData = async (result: any[]) => {
  return Promise.all(
    result.map(async (data) => {
      if (data?.indexOf('{') >= 0 && data?.lastIndexOf('}') >= 0)
        return JSON.parse(
          data.substring(data.indexOf('{'), data.lastIndexOf('}') + 1)
        );
    })
  );
};

export const getKeywords = (item) => {
  return (
    item?.keywords ||
    item?.employee?.online_profile?.keywords ||
    item?.employee?.attached_document?.keywords
  );
};

export const calculateMatchingScore = (
  profile: any,
  responses: any[],
  roundOneFinished: boolean
) => {
  const foundItem = responses.find((res) => res?.id === profile?.id);
  const profileMatchingScore =
    profile?.employee_Profile?.application?.matchingScore;

  if (foundItem?.result != null) {
    return (profileMatchingScore || 0) + foundItem.result;
  } else if (
    !roundOneFinished &&
    (profile?.employee_Profile?.online_profile ||
      profile?.employee_Profile?.attached_document)
  ) {
    return firstRoundForGeneralInfo(
      profile?.employer_Requirement,
      profile?.employee_Profile
    );
  } else {
    return profileMatchingScore;
  }
};
