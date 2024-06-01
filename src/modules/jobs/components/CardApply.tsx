import { useState } from 'react';
import { Avatar, Box, Grid, Button, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PaidIcon from '@mui/icons-material/Paid';
import SendIcon from '@mui/icons-material/Send';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';
import { Job } from '../model';
import ModalApply from '../../application/components/ModalApply';
import { toInputDateString } from 'src/utils/formatData';
import { defaultImage } from 'src/constants/uploadFileRule';
import { useApp } from 'src/modules/app/hooks';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import FollowJobButton from './FollowJobButton';
import SuspenseLoader from 'src/components/SuspenseLoader';
import CustomContainer from 'src/components/CustomContainer';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import { useResponsive } from 'src/utils/responsive';
import useQueryCheckApplied from 'src/modules/application/hooks/useQueryCheckApplied';
import LazyLoadImage from 'src/components/LazyLoadImage';

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  objectFit: 'contain',
  borderRadius: '5px'
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
  const { isMobile } = useResponsive();
  const { isEmployee, isEmployer, isAdmin } = useApp();
  const [openFormApply, setOpenFormApply] = useState(false);
  const navigate = useNavigate();
  const onCloseFormApply = () => {
    setOpenFormApply(false);
  };
  const handleOpenFormApply = () => {
    setOpenFormApply(true);
  };
  const { isApplied } = useQueryCheckApplied({ postId: data?.postId });

  return (
    <CustomContainer
      sx={{
        px: 5,
        pb: 5,
        mb: 2,
        minHeight: !isEmployer && !isAdmin ? 280 : 260
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={2}
          display="flex"
          alignItems="center"
          sx={{ justifyContent: { xs: 'center', sm: 'normal' } }}
        >
          <LazyLoadImage
            src={data?.employer?.logo || defaultImage.companyAvatar_md}
            placeholderSrc={defaultImage.companyAvatar_md}
            style={{
              width: 150,
              height: 150,
              objectFit: 'contain',
              borderRadius: '5px'
            }}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <Box>
            <Link
              to={`/company/${rewriteUrl(
                data?.employer?.companyName
              )}?id=${btoa(data?.employer?.userId.toString())}`}
              style={{ textDecoration: 'none' }}
            >
              <SubTitle>{data?.employer?.companyName}</SubTitle>
            </Link>
            <Title>{data?.jobTitle}</Title>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Grid container alignItems={'center'}>
                  <PaidIcon color="primary" sx={{ margin: '0 5px' }} />
                  <LabelText> Mức lương : </LabelText>
                  <ValueText>
                    {data?.minSalary} - {data?.maxSalary} triệu
                  </ValueText>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid
                  container
                  alignItems={'center'}
                  wrap="nowrap"
                  overflow={'hidden'}
                >
                  <DateRangeIcon color="primary" sx={{ margin: '0 5px' }} />
                  <LabelText> Hạn nộp hồ sơ : </LabelText>
                  <ValueText>{data?.applicationDeadline}</ValueText>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container alignItems={'center'}>
                  <AccessibilityIcon color="primary" sx={{ margin: '0 5px' }} />
                  <LabelText> Độ tuổi : </LabelText>
                  <ValueText>
                    {data?.minAge} - {data?.maxAge}
                  </ValueText>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container alignItems={'center'}>
                  <LocationOnIcon color="primary" sx={{ margin: '0 5px' }} />
                  <LabelText> Khu vực ứng tuyển : </LabelText>
                  <ValueText>{data?.workAddress}</ValueText>
                </Grid>
              </Grid>
            </Grid>
            {!isEmployer && !isAdmin && (
              <Box
                sx={{
                  marginTop: 2,
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: isMobile && 'center'
                }}
              >
                <Button
                  onClick={
                    isEmployee
                      ? handleOpenFormApply
                      : () => {
                          navigate('/login', {
                            state: {
                              from:
                                window.location.pathname +
                                window.location.search,
                              postId: data?.postId
                            }
                          });
                        }
                  }
                  variant="contained"
                  startIcon={<SendIcon />}
                  color="info"
                  sx={{ display: isApplied && 'none' }}
                >
                  Nộp hồ sơ
                </Button>
                <Typography display={!isApplied && 'none'} color="red">
                  Bạn đã nộp đơn ứng tuyển
                </Typography>
                <FollowJobButton job={data} />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
      <ModalApply
        open={openFormApply}
        postId={data?.postId}
        onClose={onCloseFormApply}
        position={data?.jobTitle}
        company={data?.employer?.companyName}
        job={data}
      />
    </CustomContainer>
  );
};

export default CardApply;
