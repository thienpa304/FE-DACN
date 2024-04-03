import _ from 'lodash';
import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';

export function tfidfReview(keywordArray: string[], documentText: string) {
  const termFreq = keywordArray.reduce((result, keywordArray) => {
    const regex = new RegExp(`\\b${keywordArray}\\b`, 'gi');
    const matches = documentText.match(regex) || [];
    result[keywordArray] = matches.length;
    return result;
  }, {});

  const totalWords = documentText.split(/\s+/).length;
  console.log('totl word', totalWords);

  const tfidf = {};

  Object.entries(termFreq).forEach(([word, termCount]) => {
    if (typeof termCount === 'number') {
      // Check if termCount is a number
      const tf = termCount / totalWords;
      const idf = Math.log(keywordArray.length / (termCount || 1));
      tfidf[word] = tf * idf;
    } else {
      // Handle the case where termCount is not a number
      console.error(`Term count for "${word}" is not a number.`);
    }
  });

  return _.entries(tfidf)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);
}

export const loadKeywords = (analysisResults: any[], document: any) => {
  if (analysisResults.length <= 0) return;

  const result = analysisResults[0];
  const startIndex = result.indexOf('[');
  if (startIndex === -1) {
    console.log("Không tìm thấy ký tự '['");
    return;
  }

  // Tìm vị trí kết thúc của ']'
  const endIndex = result.lastIndexOf(']');
  if (endIndex === -1) {
    console.log("Không tìm thấy ký tự ']'");
    return;
  }

  // Trích xuất chuỗi con từ vị trí startIndex đến endIndex
  const extractedString = result.substring(startIndex, endIndex + 1);

  // B1: Thay thế dấu "'" thành dấu '"' để đảm bảo JSON hợp lệ
  const jsonString = extractedString
    .replace(/'/g, '"')
    .replace(/[_\!@#$%^&*;|<>]/g, '');
  console.log('jsonString: ', jsonString);

  // B2: Parse string sang array
  const keywordArray = JSON.parse(jsonString);
  const keywordList = tfidfReview(keywordArray, JSON.stringify(document)).slice(
    0,
    20
  );
  return keywordList?.join(', ');
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
      careerGoal: profileData?.careerGoal,
      skills: profileData?.skills,
      work_experiences: profileData?.work_experiences,
      education_informations: profileData?.education_informations,
      another_degrees: profileData?.another_degrees
    };
  } else {
    console.log(cvText);

    return {
      jobTitle: profile?.jobTitle,
      profession: profile?.profession,
      careerGoal: profile?.careerGoal,
      skills: profile?.skills,
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
  const includeDateAttributes = ['work_experiences', 'education_informations'];
  const dataToAnalyze = removeAttributes(object, profileType, cvText);
  for (const attr in dataToAnalyze) {
    if (includeDateAttributes.includes(attr)) {
      dataToAnalyze[attr] = removeDateAttributes(dataToAnalyze[attr]);
    }
  }
  return dataToAnalyze;
}
