import React from 'react';
import DOMPurify from 'dompurify';

type Props = {
  content: string;
};
const TextParser: React.FC<Props> = ({ content }) => {
  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html)
    };
  }
  return <div dangerouslySetInnerHTML={createMarkup(content)}></div>;
};

export default TextParser;
