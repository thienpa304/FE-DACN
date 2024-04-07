import React, { useEffect, useState } from 'react';
import './style.css';
import { WithContext as ReactTags } from 'react-tag-input';
import { Box } from '@mui/material';

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default function TagInput({
  suggestions,
  forwardedRef,
  initialValue,
  onTagsChange,
  placeholder
}: {
  suggestions: {
    id: string;
    text: string;
  }[];
  onTagsChange: (tags: any[]) => void;
  forwardedRef?: React.RefObject<any>;
  initialValue?: any[];
  placeholder?: string;
}) {
  const [tags, setTags] = React.useState(initialValue || []);

  const handleDelete = (i) => {
    const newTagsList = tags?.filter((tag, index) => index !== i);
    onTagsChange(newTagsList);
    setTags(newTagsList);
  };

  const handleAddition = (tag) => {
    const newTagsList = [...tags, tag];
    onTagsChange(newTagsList);
    setTags(newTagsList);
  };

  const handleTagClick = (index) => {};

  useEffect(() => {
    initialValue?.length && setTags(initialValue);
  }, [initialValue]);

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
        maxTags={10}
        maxLength={25}
        allowDragDrop={false}
        placeholder={placeholder || 'Liệt kê tối đa 10 từ khóa'}
      />
    </Box>
  );
}
