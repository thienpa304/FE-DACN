import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';

export const loadKeywords = (analysisResults: any[], document?: any) => {
  if (analysisResults.length <= 0 && !Boolean(analysisResults[0])) return '';

  const result = analysisResults[0];
  if (!result) return '';

  const startIndex = result?.indexOf('[');
  const endIndex = result?.lastIndexOf(']');
  if (startIndex === undefined || endIndex === undefined) return '';

  if (startIndex === -1) {
    console.error("Không tìm thấy ký tự '['");
    return '';
  }

  if (endIndex === -1) {
    console.error("Không tìm thấy ký tự ']'");
    return '';
  }

  // Trích xuất chuỗi con từ vị trí startIndex đến endIndex
  const extractedString = result
    ?.substring(startIndex + 1, endIndex)
    ?.replace(/["]/g, '');

  // B1: Thay thế dấu "'" thành dấu '"' để đảm bảo JSON hợp lệ
  const jsonString = extractedString?.replace(/[_!@#$%^&*;|<>'"\n\t\r]/g, '');

  // B2: Parse string sang array
  const keywordArray = jsonString.split(',');

  const keywordList = keywordArray.slice(0, 20);
  return keywordList?.join(',');
};

function removeDateAttributes(data) {
  return data.map((item) => {
    const { startDate, endDate, id, isDoing, ...rest } = item;
    return rest;
  });
}

const removeAttributes = (
  profile: Partial<OnlineProfile | AttachedDocument>,
  profileType: string,
  cvText?: string
) => {
  // if profile type is OnlineProfile then return
  if (profileType === 'online') {
    const profileData = profile as Partial<OnlineProfile>;
    return {
      jobTitle: profileData?.jobTitle,
      profession: profileData?.profession,
      work_experiences: profileData?.work_experiences.map((experience) => {
        return {
          jobTitle: experience.jobTitle,
          jobDescription: experience.jobDescription
        };
      }),
      education_informations: profileData?.education_informations.map(
        (education) => education.specialization
      ),
      another_degrees: profileData?.another_degrees?.map(
        (degree) => degree.degreeName
      )
    };
  } else {
    return {
      jobTitle: profile?.jobTitle,
      profession: profile?.profession,
      cvContent: cvText
    };
  }
};

type profileType = 'online' | 'document';
export function preProcessData(
  object,
  profileType: profileType,
  cvText?: string
) {
  const dataToAnalyze = removeAttributes(object, profileType, cvText);
  return dataToAnalyze;
}
