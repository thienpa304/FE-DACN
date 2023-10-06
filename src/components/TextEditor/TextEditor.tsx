import { convertFromHTML, convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './TextEditor.css';
type Props = {
  value?: any;
  onChange?: any;
};
const TextEditor: React.FC<Props> = ({ value, onChange }) => {
  const editorDataState = EditorState.createWithContent(convertFromHTML(value));
  const [editorState, setEditorState] = useState(editorDataState);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    onChange(html);
  }, [editorState]);

  return (
    <div className="App">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
};

export default TextEditor;
