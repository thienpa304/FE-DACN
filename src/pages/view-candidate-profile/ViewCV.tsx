import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
  Avatar,
  Tooltip,
  Button
} from '@mui/material';
import CustomContainer from 'src/components/CustomContainer';
import dayjs from 'dayjs';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import ReactPDF, {
  Document,
  Page,
  Text,
  StyleSheet,
  PDFViewer
} from '@react-pdf/renderer';
import PersonalViewUI from 'src/modules/jobProfile/PersonalViewUI';
import GeneralViewUI from 'src/modules/jobProfile/GeneralViewUI';
import { ApplicationType } from 'src/constants/enum';
// import PDFview from './PDFview';

const bodyText = {
  fontSize: 15,
  lineHeight: 2.5
};

export function DownloadPage({ rootElementId, downloadFileName }) {
  const downloadFileDocument = () => {
    const input = document.getElementById(rootElementId);
    const elementWidth = input.offsetWidth; // Lấy chiều rộng của phần tử gốc
    const elementHeight = input.offsetHeight; // Lấy chiều cao của phần tử gốc

    const pdf = new jsPDF('p', 'pt', [elementWidth, elementHeight]); // Tạo một tệp PDF với kích thước dựa trên kích thước của phần tử gốc

    // Tính toán số lần cần phải chia nhỏ nội dung để vừa vào các trang
    const totalPages = Math.ceil(
      elementHeight / pdf.internal.pageSize.getHeight()
    );

    // Duyệt qua từng trang và thêm vào tệp PDF
    for (let i = 0; i < totalPages; i++) {
      const topOffset = -pdf.internal.pageSize.getHeight() * i;
      html2canvas(input, {
        scrollY: topOffset,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight + topOffset,
        useCORS: true // Bật CORS để sử dụng các hiệu ứng CSS
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(
          imgData,
          'PNG',
          50,
          topOffset + 70,
          elementWidth,
          elementHeight
        );
        // Nếu đây không phải là trang cuối cùng, thêm một trang mới
        if (i < totalPages - 1) {
          pdf.addPage();
        } else {
          // Nếu là trang cuối cùng, lưu tệp PDF và mở nó trong một cửa sổ mới
          pdf.save(downloadFileName);
          window.open(pdf.output('bloburl'), '_blank');
        }
      });
    }
  };

  return <Button onClick={downloadFileDocument}>Download Page</Button>;
}

const CVPage = ({ user }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Container id="view-cv" sx={{ bgcolor: '#f2f5f9' }}>
            <Box my={4}>
              <Typography variant="h2" gutterBottom>
                Hồ sơ của {user?.application?.name}
              </Typography>
              {(user?.online_profile || user?.attached_document) && (
                <>
                  <CustomContainer sx={{ mt: 2 }}>
                    <Box sx={{ p: 3 }}>
                      <Typography variant="h3" gutterBottom>
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
                              width: 180,
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
                        <Typography variant="h3" gutterBottom>
                          Thông tin nghề nghiệp
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
                        <Typography variant="h3" gutterBottom>
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
                      </Box>
                    </CustomContainer>
                  </Box>

                  <Box mt={4}>
                    <CustomContainer>
                      <Box sx={{ p: 3, pb: 0 }}>
                        <Typography variant="h3" gutterBottom>
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
                                {experience.endDate
                                  ? dayjs(experience.endDate).format(
                                      'DD/MM/YYYY'
                                    )
                                  : 'Hiện tại'}
                              </Typography>
                              <Typography sx={bodyText}>
                                <strong>Mô tả công việc:</strong>{' '}
                                {experience.jobDescription}
                              </Typography>
                            </Box>
                          )
                        )}
                      </Box>
                    </CustomContainer>
                  </Box>
                </>
              )}

              {!user?.online_profile && (
                <CustomContainer>
                  <Box p={3}>
                    <Typography variant="h3" gutterBottom>
                      Hồ sơ đính kèm
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <object
                      data={
                        user?.attached_document?.CV || user?.application?.CV
                      }
                      type="application/pdf"
                      width={800}
                      height={1200}
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
      <DownloadPage rootElementId="view-cv" downloadFileName={'CV.pdf'} />
    </>
  );
};

export default CVPage;
