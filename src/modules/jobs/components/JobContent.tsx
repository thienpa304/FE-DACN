import ApartmentIcon from '@mui/icons-material/Apartment';
import ArticleIcon from '@mui/icons-material/Article';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GppGoodIcon from '@mui/icons-material/GppGood';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WcIcon from '@mui/icons-material/Wc';
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextParser } from 'src/components/TextEditor';
import { Job } from '../model';
import CakeIcon from '@mui/icons-material/Cake';
import dayjs from 'dayjs';

const CommonInfo = styled(Box)(({ theme }) => ({
  padding: 10,
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
    <Container sx={{ height: '100%' }}>
      <Typography variant="h3" fontSize={22} noWrap marginBottom={2.5}>
        Thông tin chung
      </Typography>
      <CommonInfo sx={{ minHeight: 240, width: '100%' }}>
        <Grid container sx={{ my: 0.5 }}>
          <Grid item xs={12} md={4}>
            <ListItem>
              <ListItemAvatar>
                <AvatarWrapper>
                  <DateRangeIcon />
                </AvatarWrapper>
              </ListItemAvatar>
              <ListItemText
                primary={dayjs(data.createAt).format('YYYY-MM-DD')}
                secondary="Ngày đăng"
              />
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
        <Divider sx={{ width: '90%', margin: 'auto', my: 1 }} />

        <Grid container sx={{ my: 0.5 }}>
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
          <Grid item xs={12} md={4}>
            <ListItem>
              <ListItemAvatar>
                <AvatarWrapper>
                  <WcIcon />
                </AvatarWrapper>
              </ListItemAvatar>
              <ListItemText
                primary={data.sex || 'Tất cả'}
                secondary="Giới tính"
              />
            </ListItem>
          </Grid>
        </Grid>
        <Divider sx={{ width: '90%', margin: 'auto', my: 1 }} />

        <Grid container sx={{ my: 0.5 }}>
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
          <Grid item xs={12} md={4}>
            <ListItem>
              <ListItemAvatar>
                <AvatarWrapper>
                  <CakeIcon />
                </AvatarWrapper>
              </ListItemAvatar>
              <ListItemText
                primary={`${data.minAge} - ${data.maxAge}`}
                secondary="Độ tuổi"
              />
            </ListItem>
          </Grid>
        </Grid>
      </CommonInfo>
      <Typography variant="h3" fontSize={22} noWrap marginTop={2.5}>
        Kĩ năng bắt buộc
      </Typography>
      <Typography marginTop={2.5}>
        {data?.requiredSkills?.split(',')?.join(', ')}
      </Typography>
      <Typography variant="h3" fontSize={22} noWrap marginTop={2.5}>
        Mô tả công việc
      </Typography>
      <Box>
        <TextParser content={data.jobDescription} />
      </Box>
      <Typography variant="h3" fontSize={22} noWrap marginTop={2.5}>
        Yêu cầu công việc
      </Typography>
      <Box>
        <TextParser content={data.jobRequirements} />
      </Box>
      <Typography variant="h3" fontSize={22} noWrap marginTop={2.5}>
        Quyền lợi
      </Typography>
      <Box>
        <TextParser content={data.benefits} />
      </Box>
      <Typography variant="h3" fontSize={22} noWrap marginTop={2.5}>
        Địa điểm làm việc
      </Typography>
      <Grid container alignItems={'center'} marginTop={2}>
        <LocationOnIcon color="primary" sx={{ marginRight: 1 }} />
        <Box>{data.contactAddress}</Box>
      </Grid>
    </Container>
  );
};

export default JobContent;
