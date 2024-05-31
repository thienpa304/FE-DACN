import {
  Container,
  Typography,
  Box,
  Grid,
  Divider,
  Avatar
} from '@mui/material';
import CustomContainer from 'src/components/CustomContainer';
import dayjs from 'dayjs';
import PersonalViewUI from 'src/modules/jobProfile/PersonalViewUI';
import GeneralViewUI from 'src/modules/jobProfile/GeneralViewUI';
import { toOutputDateString } from 'src/utils/formatData';
import { useResponsive } from 'src/utils/responsive';

const bodyText = {
  fontSize: 14,
  lineHeight: 2.5,
  display: { xs: 'block-flex', md: 'block' },
  justifyContent: { xs: 'center', md: 'normal' },
  textAlign: { xs: 'center', md: 'left' }
};

const ViewCV = (props) => {
  const { user, bgcolor, showTitle = true } = props;
  const { isMobile } = useResponsive();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Container
            id="view-cv"
            sx={{ bgcolor: bgcolor || '#f2f5f9', my: 4 }}
            disableGutters={isMobile}
          >
            {showTitle && (
              <Typography variant="h2" gutterBottom>
                Hồ sơ của {user?.personal_information?.name}
              </Typography>
            )}

            {(user?.online_profile || user?.attached_document) && (
              <>
                <CustomContainer sx={{ mt: 2, p: { md: 3, xs: 1 } }}>
                  <Typography fontSize={20} fontWeight={700} gutterBottom>
                    Thông tin cá nhân
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3} sx={{ align: 'center' }}>
                      <Avatar
                        variant="rounded"
                        src={user?.personal_information?.avatar}
                        sx={{
                          width: { xs: '70%', sm: '40%', md: 'auto' },
                          maxWidth: 200,
                          mx: { xs: 'auto', md: 0 },
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '5px'
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <PersonalViewUI user={user?.personal_information} />
                    </Grid>
                  </Grid>
                </CustomContainer>

                <Box mt={4}>
                  <CustomContainer sx={{ p: { md: 3, xs: 1 } }}>
                    <Typography fontSize={20} fontWeight={700} gutterBottom>
                      Thông tin chung
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <GeneralViewUI
                      user={user?.online_profile || user?.attached_document}
                      sx={{ p: 0 }}
                    />
                  </CustomContainer>
                </Box>
              </>
            )}
            {user?.online_profile && (
              <>
                <CustomContainer mt={4} sx={{ p: { md: 3, xs: 1 } }}>
                  <Typography fontSize={20} fontWeight={700} gutterBottom>
                    Học vấn
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  {user?.online_profile?.education_informations?.map(
                    (education, index) => (
                      <Box key={index} mb={3}>
                        {index !== 0 && (
                          <Divider
                            sx={{ my: 3, width: '80%', marginX: 'auto' }}
                          />
                        )}
                        <Typography sx={bodyText}>
                          <strong>Trường: </strong> {education.schoolName}
                        </Typography>
                        <Typography sx={bodyText}>
                          <strong>Chuyên ngành: </strong>
                          {education.specialization}
                        </Typography>
                        <Typography sx={bodyText}>
                          <strong>Bằng cấp: </strong> {education.degreeName}
                        </Typography>
                        <Typography sx={bodyText}>
                          <strong>Thời gian: </strong>
                          {dayjs(education.startDate).format(
                            'DD/MM/YYYY'
                          )} -{' '}
                          {education.endDate
                            ? dayjs(education.endDate).format('DD/MM/YYYY')
                            : 'Hiện tại'}
                        </Typography>
                      </Box>
                    )
                  )}
                  {!user?.online_profile?.education_informations?.length && (
                    <Typography
                      sx={[bodyText, { color: '#999', fontStyle: 'italic' }]}
                    >
                      Chưa cập nhật
                    </Typography>
                  )}
                </CustomContainer>

                <CustomContainer mt={4} sx={{ p: { md: 3, xs: 1 } }}>
                  <Typography fontSize={20} fontWeight={700} gutterBottom>
                    Kinh nghiệm làm việc
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  {user?.online_profile?.work_experiences?.map(
                    (experience, index) => (
                      <Box key={index} mb={3}>
                        {index !== 0 && (
                          <Divider
                            sx={{ my: 3, width: '80%', marginX: 'auto' }}
                          />
                        )}
                        <Typography sx={bodyText}>
                          <strong>Công ty: </strong> {experience.companyName}
                        </Typography>
                        <Typography sx={bodyText}>
                          <strong>Vị trí: </strong> {experience.jobTitle}
                        </Typography>
                        <Typography sx={bodyText}>
                          <strong>Thời gian: </strong>
                          {dayjs(experience.startDate).format(
                            'DD/MM/YYYY'
                          )} -{' '}
                          {experience.endDate &&
                          experience.endDate !== '1899-11-30'
                            ? toOutputDateString(experience.endDate)
                            : 'Hiện tại'}
                        </Typography>
                        <Typography sx={bodyText}>
                          <strong>Mô tả công việc: </strong>
                          {experience.jobDescription}
                        </Typography>
                      </Box>
                    )
                  )}
                  {!user?.online_profile?.work_experiences?.length && (
                    <Typography
                      sx={[bodyText, { color: '#999', fontStyle: 'italic' }]}
                    >
                      Chưa cập nhật
                    </Typography>
                  )}
                </CustomContainer>

                <CustomContainer mt={4} sx={{ p: { md: 3, xs: 1 } }}>
                  <Typography fontSize={20} fontWeight={700} gutterBottom>
                    Chứng chỉ khác
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  {user?.online_profile?.another_degrees?.map(
                    (degree, index) => (
                      <Box key={index} mb={3}>
                        {index !== 0 && (
                          <Divider
                            sx={{ my: 3, width: '80%', marginX: 'auto' }}
                          />
                        )}
                        <Typography sx={bodyText}>
                          <strong>Tên chứng chỉ: </strong> {degree.degreeName}
                        </Typography>
                        <Typography sx={bodyText}>
                          <strong>Mức độ thành thạo: </strong> {degree.level}
                        </Typography>
                      </Box>
                    )
                  )}
                  {!user?.online_profile?.another_degrees?.length && (
                    <Typography
                      sx={[bodyText, { color: '#999', fontStyle: 'italic' }]}
                    >
                      Chưa cập nhật
                    </Typography>
                  )}
                </CustomContainer>
              </>
            )}

            {!user?.online_profile && (
              <CustomContainer sx={{ p: { md: 3, xs: 1 } }}>
                <Typography fontSize={20} fontWeight={700} gutterBottom>
                  Hồ sơ đính kèm
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box
                  component="iframe"
                  src={user?.attached_document?.CV || user?.application?.CV}
                  width="100%"
                  height={isMobile ? '500px' : '1000px'}
                  sx={{
                    border: '1px solid #ccc',
                    display: 'block',
                    margin: 'auto'
                  }}
                />
              </CustomContainer>
            )}
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default ViewCV;
