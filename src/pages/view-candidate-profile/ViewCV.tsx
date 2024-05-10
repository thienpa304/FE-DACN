import {
  Container,
  Typography,
  Box,
  Grid,
  Divider,
  Avatar,
  Button
} from '@mui/material';
import CustomContainer from 'src/components/CustomContainer';
import dayjs from 'dayjs';
import PersonalViewUI from 'src/modules/jobProfile/PersonalViewUI';
import GeneralViewUI from 'src/modules/jobProfile/GeneralViewUI';
import { ApplicationType } from 'src/constants/enum';
import { useEffect, useState } from 'react';
import { toOutputDateString } from 'src/utils/inputOutputFormat';

const bodyText = {
  fontSize: 15,
  lineHeight: 2.5
};

const CVPage = (props) => {
  const { user, bgcolor, showTitle = true } = props;

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Container id="view-cv" sx={{ bgcolor: bgcolor || '#f2f5f9' }}>
            <Box my={4}>
              {showTitle && (
                <Typography variant="h2" gutterBottom>
                  Hồ sơ của {user?.personal_information?.name}
                </Typography>
              )}
              {(user?.online_profile || user?.attached_document) && (
                <>
                  <CustomContainer sx={{ mt: 2 }}>
                    <Box sx={{ p: 3 }}>
                      <Typography fontSize={20} fontWeight={700} gutterBottom>
                        Thông tin cá nhân
                      </Typography>
                      <Divider sx={{ mb: 2 }} />
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={12}
                          sm={5}
                          md={3}
                          sx={{ align: 'center' }}
                        >
                          <Avatar
                            variant="rounded"
                            src={user?.personal_information?.avatar}
                            style={{
                              width: 'auto',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: '5px'
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={7} md={9}>
                          <PersonalViewUI user={user?.personal_information} />
                        </Grid>
                      </Grid>
                    </Box>
                  </CustomContainer>

                  <Box mt={4}>
                    <CustomContainer>
                      <Box p={3}>
                        <Typography fontSize={20} fontWeight={700} gutterBottom>
                          Thông tin chung
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <GeneralViewUI
                          user={user?.online_profile || user?.attached_document}
                          sx={{ p: 0 }}
                        />
                      </Box>
                    </CustomContainer>
                  </Box>
                </>
              )}

              {user?.online_profile && (
                <>
                  <Box mt={4}>
                    <CustomContainer>
                      <Box sx={{ p: 3, pb: 0 }}>
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
                                <strong>Trường:</strong> {education.schoolName}
                              </Typography>
                              <Typography sx={bodyText}>
                                <strong>Chuyên ngành:</strong>{' '}
                                {education.specialization}
                              </Typography>
                              <Typography sx={bodyText}>
                                <strong>Bằng cấp:</strong>{' '}
                                {education.degreeName}
                              </Typography>
                              <Typography sx={bodyText}>
                                <strong>Thời gian:</strong>{' '}
                                {dayjs(education.startDate).format(
                                  'DD/MM/YYYY'
                                )}{' '}
                                -{' '}
                                {education.endDate
                                  ? dayjs(education.endDate).format(
                                      'DD/MM/YYYY'
                                    )
                                  : 'Hiện tại'}
                              </Typography>
                            </Box>
                          )
                        )}
                        {!user?.online_profile?.education_informations
                          .length && (
                          <Typography
                            sx={[
                              bodyText,
                              { color: '#999', fontStyle: 'italic' }
                            ]}
                          >
                            Chưa cập nhật
                          </Typography>
                        )}
                      </Box>
                    </CustomContainer>
                  </Box>

                  <Box mt={4}>
                    <CustomContainer>
                      <Box sx={{ p: 3, pb: 0 }}>
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
                                <strong>Công ty:</strong>{' '}
                                {experience.companyName}
                              </Typography>
                              <Typography sx={bodyText}>
                                <strong>Vị trí:</strong> {experience.jobTitle}
                              </Typography>
                              <Typography sx={bodyText}>
                                <strong>Thời gian:</strong>{' '}
                                {dayjs(experience.startDate).format(
                                  'DD/MM/YYYY'
                                )}{' '}
                                -{' '}
                                {experience.endDate &&
                                experience.endDate !== '1899-11-30'
                                  ? toOutputDateString(experience.endDate)
                                  : 'Hiện tại'}
                              </Typography>
                              <Typography sx={bodyText}>
                                <strong>Mô tả công việc:</strong>{' '}
                                {experience.jobDescription}
                              </Typography>
                            </Box>
                          )
                        )}
                        {!user?.online_profile?.work_experiences.length && (
                          <Typography
                            sx={[
                              bodyText,
                              { color: '#999', fontStyle: 'italic' }
                            ]}
                          >
                            Chưa cập nhật
                          </Typography>
                        )}
                      </Box>
                    </CustomContainer>
                  </Box>
                </>
              )}

              {!user?.online_profile && (
                <CustomContainer>
                  <Box p={3}>
                    <Typography fontSize={20} fontWeight={700} gutterBottom>
                      Hồ sơ đính kèm
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <object
                      data={
                        user?.attached_document?.CV || user?.application?.CV
                      }
                      type="application/pdf"
                      width="100%"
                      height={'1000px'}
                      style={{
                        border: '1px solid #ccc',
                        display: 'flex',
                        margin: 'auto'
                      }}
                    ></object>
                  </Box>
                </CustomContainer>
              )}
            </Box>
          </Container>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </>
  );
};

export default CVPage;
