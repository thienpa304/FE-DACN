import React, { useEffect, useState } from 'react';
import './style.css';
import { WithContext as ReactTags } from 'react-tag-input';
import { Box } from '@mui/material';

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

type TagInputProps = {
  suggestions: {
    id: string;
    text: string;
  }[];
  onChange: (tags: any[]) => void;
  forwardedRef?: React.RefObject<any>;
  value?: any[];
  placeholder?: string;
};

const MAX_LENGTH = 25;
const MAX_TAGS = 5;

export default function TagInput(props: TagInputProps) {
  const { suggestions, onChange, forwardedRef, value, placeholder } = props;
  const [tags, setTags] = React.useState(value || []);

  const handleDelete = (i) => {
    const newTagsList = tags?.filter((tag, index) => index !== i);
    onChange(newTagsList);
    setTags(newTagsList);
  };

  const handleAddition = (tag) => {
    const newTagsList = [...tags, tag];
    onChange(newTagsList);
    setTags(newTagsList);
  };

  const handleTagClick = (index) => {};

  useEffect(() => {
    value?.length && setTags(value);
  }, [value]);

  return (
    <Box
      ref={forwardedRef}
      sx={{
        width: '100%',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px'
      }}
    >
      <ReactTags
        tags={tags}
        suggestions={suggestions}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleTagClick={handleTagClick}
        maxTags={MAX_TAGS}
        maxLength={MAX_LENGTH}
        allowDragDrop={false}
        placeholder={placeholder || `Liệt kê tối đa ${MAX_TAGS} từ khóa`}
      />
    </Box>
  );
}
