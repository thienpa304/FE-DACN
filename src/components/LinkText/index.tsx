import { styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const LinkWrapper = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.colors.info.dark,
  '&:active': {
    color: theme.colors.primary.light
  },
  '&:visited': {
    color: theme.colors.info.dark
  }
}));
const LinkText = (props) => {
  return <LinkWrapper {...props} />;
};

export default LinkText;
