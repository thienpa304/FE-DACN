import {
  RoundOneCheck,
  RoundThreeCheck,
  RoundTwoCheck
} from 'src/modules/ai/roles';
import { preProcessText } from './inputOutputFormat';
import sendChatGPTRequest from 'src/modules/ai/sendChatGPTRequest';
import { getFileByUrl } from 'src/common/firebaseService';
import pdfToText from 'react-pdftotext';
import { User } from 'src/modules/users/model';
import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
import { Application } from 'src/modules/application/model';
import { Job } from 'src/modules/jobs/model';
import { compareDegrees, compareExperience } from './compareEnum';
import dayjs from 'dayjs';

export const FAIL_SCORE = 0; // < 30
export const LOW_SCORE = 30; // 30 - 80
export const NORMAL_SCORE = 80; // 80 - 110
export const HIGH_SCORE = 110; // higher than 110

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

export const firstRoundForGeneralInfo = (job, profile) => {
  const { personal_information, online_profile, attached_document } = profile;

  const birthday = dayjs(personal_information?.dob, 'YYYY-MM-DD').isValid()
    ? dayjs(personal_information?.dob, 'YYYY-MM-DD')
    : dayjs(personal_information?.dob, 'DD-MM-YYYY');
  const age = dayjs().year() - birthday.year();

  if (
    job?.sex !== personal_information?.sex ||
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

  if (!profession.includes(job?.profession)) return false;

  if (compareDegrees(degree, job?.degree) < 0) return false;

  if (compareExperience(experience, job?.experience) < 0) return false;

  return true;
};

const handleRoundOne = async (
  dataToAnalyze: ProfileApplicationType[],
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
  console.log('cvContentProfile', cvContentProfile);

  const result = await sendChatGPTRequest(
    RoundOneCheck,
    cvEnclosedProfileList
  ).catch(() => []);
  setAnalyzedProfile(cvContentProfile);
  if (result !== null && result !== undefined)
    handleGoToAnalyzeResult(true, result);
};

const handleRoundTwo = async (
  passRoundOneProfiles,
  handleAnalyzeResult: (result: any[]) => Promise<void>
) => {
  console.log('Start round 2');
  const dataSendToGPT = passRoundOneProfiles.map((item) => {
    let profile;
    if (item?.employee_Profile?.online_profile) {
      profile = {
        jobTitle: item?.employee_Profile?.online_profile?.jobTitle,
        skills: item?.employee_Profile?.online_profile.skills,
        another_degree:
          item?.employee_Profile?.online_profile.another_degree?.map(
            (degree) => degree.Name
          ),
        education_informations:
          item?.employee_Profile?.online_profile.education_informations?.map(
            (education) => education.degreeName
          ),
        work_experiences:
          item?.employee_Profile?.online_profile.work_experiences?.map(
            (experience) => {
              return {
                jobTitle: experience?.jobTitle,
                jobDescription: experience?.jobDescription
              };
            }
          )
      };
    } else if (item?.employee_Profile?.attached_document) {
      profile = {
        skills: item?.employee_Profile?.attached_document.skills,
        CV: item?.employee_Profile?.attached_document.CV
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
  console.log('dataToSend', dataSendToGPT);

  const result = await sendChatGPTRequest(RoundTwoCheck, dataSendToGPT).catch(
    () => []
  );

  handleAnalyzeResult(result);
};

const handleRoundThree = async (
  passRoundOneProfiles,
  handleAnalyzeResult: (result: any[]) => Promise<void>
) => {
  console.log('Start round 3');
  const result = await sendChatGPTRequest(
    RoundThreeCheck,
    passRoundOneProfiles.map((item) => ({
      id: item.id,
      employer_Requirement: {
        keywords: item.employer_Requirement.keywords
      },
      employee_Profile: {
        keywords: item.employee_Profile.application.keywords
      }
    }))
  ).catch(() => []);
  handleAnalyzeResult(result);
};

export const preprocessJobData = (job) => ({
  id: job?.postId,
  jobTitle: job?.jobTitle,
  profession: job?.profession,
  jobDescription: preProcessText(job?.jobDescription),
  jobRequirements: preProcessText(job?.jobRequirements),
  benefits: preProcessText(job?.benefits),
  workAddress: job?.workAddress,
  minAge: job?.minAge,
  maxAge: job?.maxAge,
  sex: job?.sex,
  requiredSkills: job?.requiredSkills,
  employmentType: job?.employmentType,
  degree: job?.degree,
  experience: job?.experience,
  positionLevel: job?.positionLevel,
  keywords: job?.keywords
});

export const preprocessProfileData = (profile) => ({
  ...profile,
  personal_information: {
    dob: profile?.personal_information?.dob,
    sex: profile?.personal_information?.sex
  }
});

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

export const matchProfileById = (
  analyzedProfile,
  cvEnclosedProfileList,
  attachProfileList
) => {
  console.log(
    '****',
    analyzedProfile.map(
      (item) =>
        findMatchedProfile(item.id, cvEnclosedProfileList, attachProfileList) ||
        item
    )
  );

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

export const review = async ({
  round,
  handleAnalyzeResult,
  setIsAnalyzing,
  setAnalyzedProfile,
  dataToAnalyze,
  passRoundOneProfiles,
  resetMatchingScoreList,
  handleGoToAnalyzeResult
}: {
  round: number;
  handleAnalyzeResult: (result: any[]) => Promise<void>;
  setIsAnalyzing: (data: boolean) => void;
  setAnalyzedProfile?: (data: ProfileApplicationType[]) => Promise<void>;
  dataToAnalyze?: ProfileApplicationType[];
  passRoundOneProfiles?: ProfileApplicationType[];
  resetMatchingScoreList?: ProfileApplicationType[];
  handleGoToAnalyzeResult?: any;
}) => {
  setIsAnalyzing(true);
  console.log('dataToAnalyze', dataToAnalyze);

  switch (round) {
    case 1:
      await handleRoundOne(
        dataToAnalyze,
        resetMatchingScoreList,
        setAnalyzedProfile,
        handleAnalyzeResult,
        handleGoToAnalyzeResult
      );
      break;
    case 2:
      await handleRoundTwo(passRoundOneProfiles, handleAnalyzeResult);
      break;
    case 3:
      await handleRoundThree(passRoundOneProfiles, handleAnalyzeResult);
      break;
    default:
      break;
  }
};
