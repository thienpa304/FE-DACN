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
  const [first, setFirst] = useState(true);
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
    const method = {
      styleToHTML: (style) => {
        if (style.startsWith('fontsize-')) {
          const fontSize = style.split('-')[1];
          return <span style={{ fontSize: `${fontSize}px` }} />;
        } else if (style === 'STRIKETHROUGH') {
          return <span style={{ textDecoration: 'line-through' }} />;
        } else if (style === 'SUBSCRIPT') {
          return <span style={{ verticalAlign: 'sub' }} />;
        } else if (style === 'SUPERSCRIPT') {
          return <span style={{ verticalAlign: 'super' }} />;
        } else if (style.startsWith('fontfamily-')) {
          const fontFamily = style.split('-')[1];
          return <span style={{ fontFamily }} />;
        } else if (style.startsWith('color-rgb')) {
          const color = style.split('-')[1];
          return <span style={{ color }} />;
        }
      },
      entityToHTML: (entity, originalText) => {
        if (entity.type === 'LINK') {
          return (
            <a href={entity.data.url} target={entity.data.targetOption}>
              {originalText}
            </a>
          );
        } else if (entity.type === 'EMBEDDED_LINK') {
          return (
            <iframe
              src={entity.data.src}
              height={entity.data.height}
              width={entity.data.width}
            />
          );
        } else if (entity.type === 'IMAGE') {
          return (
            <img
              src={entity.data.src}
              height={entity.data.height}
              width={entity.data.width}
            />
          );
        }
        return originalText;
      }
    };
    setEditorState(value);
    let html = convertToHTML(method)(value.getCurrentContent());
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
