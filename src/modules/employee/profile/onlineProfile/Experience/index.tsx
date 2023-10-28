import {
  Box,
  Typography,
  Container,
  Divider,
} from '@mui/material';
import ExperienceView from './ViewWork';

export default function Experience() {
  return (
    <>
      <Container id="work_experience">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex">
            <Typography fontWeight={700} fontSize={21} lineHeight={3}>
              Thông tin nghề nghiệp
            </Typography>
          </Box>
        </Box>
        <Divider />
        <ExperienceView />
      </Container >
    </>
  );
}
