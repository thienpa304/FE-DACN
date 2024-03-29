import _ from 'lodash';

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
