import { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Container
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PaidIcon from '@mui/icons-material/Paid';
import SendIcon from '@mui/icons-material/Send';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';
import { Job } from '../model';
import ModalApply from '../../application/components/ModalApply';
import { toInputDateString } from 'src/utils/inputOutputFormat';
import { defaultImage } from 'src/constants/uploadFileRule';
import { useApp } from 'src/modules/app/hooks';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import FollowButton from './FollowButton';
import SuspenseLoader from 'src/components/SuspenseLoader';

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  objectFit: 'contain'
}));
const SubTitle = styled('h3')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 16,
  color: theme.colors.alpha.black[70]
}));
const Title = styled('h3')(() => ({
  fontWeight: 600,
  fontSize: 18
}));
const LabelText = styled('span')(({ theme }) => ({
  color: theme.colors.alpha.black[70]
}));
const ValueText = styled('span')(({ theme }) => ({
  color: theme.colors.alpha.black[100],
  marginLeft: 5
}));
type Props = {
  data: Partial<Job>;
};
const CardApply: React.FC<Props> = ({ data }) => {
  const { isEmployee, isEmployer, isAdmin } = useApp();
  const [openFormApply, setOpenFormApply] = useState(false);
  const navigate = useNavigate();
  const onCloseFormApply = () => {
    setOpenFormApply(false);
  };
  const handleOpenFormApply = () => {
    setOpenFormApply(true);
  };

  return (
    <Card>
      <CardContent>
        <Container>
          <Grid container>
            <Grid item xs={12} md={2} display="flex" alignItems="center">
              <AvatarWrapper
                src={data?.employer?.logo || defaultImage.companyAvatar}
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <Box>
                <Link
                  to={`/company/${data?.employer?.userId}`}
                  style={{ textDecoration: 'none' }}
                >
                  <SubTitle>{data?.employer?.companyName}</SubTitle>
                </Link>
                <Title>{data.jobTitle}</Title>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <Grid container alignItems={'center'}>
                      <PaidIcon color="primary" sx={{ margin: '0 5px' }} />
                      <LabelText> Mức lương : </LabelText>
                      <ValueText>
                        {data.minSalary} - {data.maxSalary} triệu
                      </ValueText>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid container alignItems={'center'}>
                      <DateRangeIcon color="primary" sx={{ margin: '0 5px' }} />
                      <LabelText> Hạn nộp hồ sơ : </LabelText>
                      <ValueText>{data.applicationDeadline}</ValueText>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid container alignItems={'center'}>
                      <AccessibilityIcon
                        color="primary"
                        sx={{ margin: '0 5px' }}
                      />
                      <LabelText> Độ tuổi : </LabelText>
                      <ValueText>
                        {data.minAge} - {data.maxAge}
                      </ValueText>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid container alignItems={'center'}>
                      <LocationOnIcon
                        color="primary"
                        sx={{ margin: '0 5px' }}
                      />
                      <LabelText> Khu vực ứng tuyển : </LabelText>
                      <ValueText>{data.contactAddress}</ValueText>
                    </Grid>
                  </Grid>
                </Grid>
                {!isEmployer && !isAdmin && (
                  <Box
                    sx={{
                      marginTop: 1,
                      display: 'flex',
                      gap: 2,
                      alignItems: 'center'
                    }}
                  >
                    <Button
                      onClick={
                        isEmployee
                          ? handleOpenFormApply
                          : () => {
                              navigate('/login');
                            }
                      }
                      variant="contained"
                      startIcon={<SendIcon />}
                      color="info"
                    >
                      Nộp hồ sơ
                    </Button>
                    <FollowButton job={data} />
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
          <ModalApply
            open={openFormApply}
            postId={data.postId}
            onClose={onCloseFormApply}
            position={data.jobTitle}
            company={data?.employer?.companyName}
            job={data}
          />
        </Container>
      </CardContent>
    </Card>
  );
};

export default CardApply;
