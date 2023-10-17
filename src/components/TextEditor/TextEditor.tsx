import { convertFromHTML, convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditorWrapper = styled(Box)(({ theme }) => ({
  '& .wrapper-class .editor-class': {
    minHeight: 200,
    cursor: 'text',
    borderRadius: 6,
    padding: 6,
    border: `1px solid ${theme.colors.alpha.black[30]}`,
    '&:focus-within': {
      border: `2px solid ${theme.colors.primary.main}`
    }
  }
}));

type Props = {
  value?: any;
  onChange?: any;
};
const TextEditor: React.FC<Props> = ({ value, onChange }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [first, setFirst] = useState(true)
  useEffect(() => {
    if (first && value) {
      const editorDataStates = EditorState.createWithContent(
        convertFromHTML(value)
      );
      setEditorState(editorDataStates);
      setFirst(false);
    }
  }, [value]);

  const handleSetEditorState = (value) => {
    setEditorState(value);
    let html = convertToHTML(value.getCurrentContent());
    onChange(html);
  };

  return (
    <TextEditorWrapper>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleSetEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </TextEditorWrapper>
  );
};

export default TextEditor;
