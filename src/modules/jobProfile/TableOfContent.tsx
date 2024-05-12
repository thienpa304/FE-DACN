import { List, ListItem, Button, Typography, Grid } from '@mui/material';

const handleScrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const TableOfContents = ({ sections }) => {
  return (
    <List component="nav" sx={{ px: 0 }}>
      <ListItem>
        <Typography fontSize={14} fontWeight={700}>
          Hồ sơ trực tuyến của bạn
        </Typography>
      </ListItem>
      {sections.map((section) => (
        <ListItem key={section.id} sx={{ p: 0 }}>
          <Button
            sx={{ py: 1 }}
            fullWidth
            onClick={() => handleScrollToSection(section.id)}
            color="secondary"
          >
            <Grid container>
              <Grid
                item
                xs={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {section.icon}
              </Grid>
              <Grid
                item
                xs={10}
                display="flex"
                justifyContent="left"
                alignItems="center"
              >
                <Typography fontSize={13}>{section.title}</Typography>
              </Grid>
            </Grid>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TableOfContents;
