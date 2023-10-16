import ApartmentIcon from '@mui/icons-material/Apartment';
import ArticleIcon from '@mui/icons-material/Article';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GppGoodIcon from '@mui/icons-material/GppGood';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Avatar,
  Box,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextParser } from 'src/components/TextEditor';
import { Job } from '../model';
const CommonInfo = styled(Box)(({ theme }) => ({
  padding: 5,
  backgroundColor: '#F0FFF0',
  color: theme.colors.alpha.black[100],
  borderRadius: 6
}));
const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#e6f6e6',
  color: '#006400'
}));

type Props = {
  data: Partial<Job>;
};
const JobContent: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Typography variant="h3" noWrap marginBottom={2}>
        Thông tin chung
      </Typography>
      <CommonInfo>
        <Grid container>
          <Grid item xs={12} md={4}>
            <ListItem>
              <ListItemAvatar>
                <AvatarWrapper>
                  <DateRangeIcon />
                </AvatarWrapper>
              </ListItemAvatar>
              <ListItemText primary="Jan 9, 2014" secondary="Ngày đăng" />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={4}>
            <ListItem>
              <ListItemAvatar>
                <AvatarWrapper>
                  <EventAvailableIcon />
                </AvatarWrapper>
              </ListItemAvatar>
              <ListItemText
                primary={`${data.trialPeriod} tháng`}
                secondary="Thời gian thử việc"
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={4}>
            <ListItem>
              <ListItemAvatar>
                <AvatarWrapper>
                  <HowToRegIcon />
                </AvatarWrapper>
              </ListItemAvatar>
              <ListItemText primary={data.positionLevel} secondary="Cấp bậc" />
            </ListItem>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={4}>
            <ListItem>
              <ListItemAvatar>
                <AvatarWrapper>
                  <PeopleIcon />
                </AvatarWrapper>
              </ListItemAvatar>
              <ListItemText
                primary={data.numberOfVacancies}
                secondary="Số lượng tuyển"
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={4}>
            <ListItem>
              <ListItemAvatar>
                <AvatarWrapper>
                  <ArticleIcon />
                </AvatarWrapper>
              </ListItemAvatar>
              <ListItemText
                primary={data.employmentType}
                secondary="Hình thức làm việc"
              />
            </ListItem>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={4}>
            <ListItem>
              <ListItemAvatar>
                <AvatarWrapper>
                  <GppGoodIcon />
                </AvatarWrapper>
              </ListItemAvatar>
              <ListItemText
                primary={data.degree}
                secondary="Yêu cầu bằng cấp"
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={4}>
            <ListItem>
              <ListItemAvatar>
                <AvatarWrapper>
                  <ApartmentIcon />
                </AvatarWrapper>
              </ListItemAvatar>
              <ListItemText
                primary={data.experience}
                secondary="Yêu cầu kinh nghiệm"
              />
            </ListItem>
          </Grid>
        </Grid>
      </CommonInfo>
      <Typography variant="h3" noWrap marginBottom={2} marginTop={2}>
        Mô tả công việc
      </Typography>
      <Box>
        <TextParser content={data.jobRequirements} />
      </Box>
      <Typography variant="h3" noWrap marginBottom={2} marginTop={2}>
        Yêu cầu công việc
      </Typography>
      <Box>
        <TextParser content={data.jobRequirements} />
      </Box>
      <Typography variant="h3" noWrap marginBottom={2} marginTop={2}>
        Quyền lợi
      </Typography>
      <Box>
        <TextParser content={data.benefits} />
      </Box>
      <Typography variant="h3" noWrap marginBottom={2} marginTop={2}>
        Địa điểm làm việc
      </Typography>
      <Grid container alignItems={'center'}>
        <LocationOnIcon color="primary" sx={{ margin: '0 5px' }} />
        <div>{data.workAddress}</div>
      </Grid>
    </>
  );
};

export default JobContent;
