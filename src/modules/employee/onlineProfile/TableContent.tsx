import React from 'react';
import {
  List,
  ListItem,
  Button,
  Link,
  Divider,
  Typography,
  Box,
  Grid
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    zIndex: 1
  },
  listItem: {
    marginBottom: '0px'
  },
  button: {
    fullWidth: true,
    color: 'secondary',
    fontSize: 12
  }
}));

const TableOfContents = ({ sections }) => {
  const classes = useStyles();
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <List component="nav" sx={{ px: 0 }}>
      <ListItem>
        <Typography fontSize={17} fontWeight={700}>
          Hồ sơ trực tuyến của bạn
        </Typography>
      </ListItem>
      {sections.map((section) => (
        <ListItem key={section} sx={{ p: 0 }}>
          <Button
            sx={{ p: 0 }}
            fullWidth
            onClick={() => handleScrollToSection(section.id)}
            color="secondary"
          >
            <Grid container width={'100%'} columnGap={0}>
              <Grid item xs={2}>
                {section.icon}
              </Grid>
              <Grid item xs={8} display="flex" justifyContent="left">
                <Typography fontSize={14}>{section.title}</Typography>
              </Grid>
            </Grid>
          </Button>
        </ListItem>
      ))}
      <ListItem sx={{ p: 0 }}></ListItem>
    </List>
  );
};

export default TableOfContents;
