const user = {
  userId: 4,
  email: 'xinviec1@gmail.com',
  name: 'Lantin',
  role: 'EMPLOYEE',
  dob: '19-11-1991',
  address: '1000/122 Lý Thường Kiệt',
  phone: '0901234567',
  sex: 'Nam',
  avatar:
    'https://firebasestorage.googleapis.com/v0/b/job-recommend-web.appspot.com/o/userDocument%2Fgithub-logo.png43bf6ffc-87fe-46f6-8118-58ef9c1979a3?alt=media&token=51d9a881-ce5d-471a-bf81-1366d97acd25',
  isMarried: true,
  jobTitle: 'Kế toán',
  profession:
    'Khách sạn - Nhà hàng - Du lịch, Hành chính - Thư ký, Marketing, Bán sỉ - Bán lẻ - Quản lý cửa hàng, Bán hàng - Kinh doanh',
  currentPosition: 'Chuyên viên - nhân viên',
  desiredPosition: 'Quản lí nhóm-giám sát',
  desiredSalary: 15,
  degree: 'Cao đẳng',
  workAddress: 'Thành phố Hà Nội, Tỉnh Hà Giang',
  experience: '1 năm',
  employmentType: 'Toàn thời gian cố định',
  careerGoal: 'Thời gian dài, ổn định, có cơ hội thăng tiến',
  skills: 'thành thạo về giao tiếp Tiếng Anh, Word, Excel',
  view: 0,
  isHidden: false,
  employee: {
    userId: 4,
    isMarried: true
  },
  another_degrees: [
    {
      id: 126,
      degreeName: 'Toeic',
      level: '800'
    }
  ],
  education_informations: [
    {
      id: 35,
      schoolName: 'Đại học Bách Khoa TPHCM',
      specialization: 'Khoa học Máy tính',
      degreeName: 'Cử nhân',
      startDate: '2020-09-23',
      endDate: '2024-09-05'
    },
    {
      id: 37,
      schoolName: 'Nhân văn',
      specialization: 'Văn phòng',
      degreeName: 'Cử nhân',
      startDate: '2024-03-05',
      endDate: '2024-03-26'
    }
  ],
  work_experiences: [
    {
      id: 41,
      jobTitle: 'Sale',
      companyName: 'R&B',
      startDate: '2024-03-04',
      endDate: '1899-11-30',
      isDoing: true,
      jobDescription: 'Bán hàng tại siêu thị, phụ thu ngân.'
    },
    {
      id: 45,
      jobTitle: 'Biên dịch viên',
      companyName: 'Đại sứ quán  ',
      startDate: '2013-03-18',
      endDate: null,
      isDoing: true,
      jobDescription: 'Biên dịch văn bản Tiếng Anh, Tiếng Trung.'
    }
  ]
};

import React from 'react';
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
import {
  Document,
  Page,
  Text,
  StyleSheet,
  PDFViewer
} from '@react-pdf/renderer';
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

// const takePhotoThisPage = () => {
//   const element = document.getElementById('form-create');
//   html2canvas(element).then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF();
//     pdf.addImage(imgData, 'PNG', 15, 40, 180, 100);
//     pdf.save('form-create.pdf');
//     window.open(pdf.output('bloburl'), '_blank');
//   });
// };

const CVPage = ({ user }) => {
  return (
    <>
      <Container id="view-cv" sx={{ bgcolor: '#f2f5f9' }}>
        <Box my={4}>
          <Typography variant="h2" gutterBottom>
            Hồ sơ của {user.name}
          </Typography>
          <CustomContainer sx={{ mt: 2 }}>
            <Box sx={{ p: 3 }}>
              <Typography variant="h3" gutterBottom>
                Thông tin cá nhân
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5} md={3} sx={{ align: 'center' }}>
                  {/* <Tooltip title="Avatar"></Tooltip> */}
                  <Box
                    sx={{
                      width: 180,
                      height: 250,
                      overflow: 'hidden',
                      borderRadius: '5px'
                    }}
                  >
                    <img
                      src={user.avatar}
                      style={{
                        width: '120%',
                        height: '100%'
                        // objectFit: 'cover'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={7} md={9}>
                  <Typography sx={bodyText}>
                    <strong>Họ và tên:</strong> {user.name}
                  </Typography>
                  <Typography sx={bodyText}>
                    <strong>Email:</strong> {user.email}
                  </Typography>
                  <Typography sx={bodyText}>
                    <strong>Địa chỉ:</strong> {user.address}
                  </Typography>
                  <Typography sx={bodyText}>
                    <strong>Điện thoại:</strong> {user.phone}
                  </Typography>
                  <Typography sx={bodyText}>
                    <strong>Ngày sinh:</strong>{' '}
                    {dayjs(user.dob, 'DD-MM-YYYY').format('DD/MM/YYYY')}
                  </Typography>
                  <Typography sx={bodyText}>
                    <strong>Giới tính:</strong> {user.sex}
                  </Typography>
                  <Typography sx={bodyText}>
                    <strong>Tình trạng hôn nhân:</strong>{' '}
                    {user.isMarried ? 'Đã kết hôn' : 'Độc thân'}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CustomContainer>

          <Box mt={4}>
            <CustomContainer>
              <Box sx={{ p: 3 }}>
                <Typography variant="h3" gutterBottom>
                  Thông tin nghề nghiệp
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography sx={bodyText}>
                  <strong>Vị trí mong muốn:</strong> {user.jobTitle}
                </Typography>
                <Typography sx={bodyText}>
                  <strong>Nghề nghiệp:</strong> {user.profession}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography sx={bodyText}>
                      <strong>Cấp bậc hiện tại:</strong> {user.currentPosition}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={bodyText}>
                      <strong>Cấp bậc mong muốn:</strong> {user.desiredPosition}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography sx={bodyText}>
                      <strong>Mức lương mong muốn:</strong> {user.desiredSalary}{' '}
                      triệu VNĐ
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={bodyText}>
                      <strong>Trình độ học vấn:</strong> {user.degree}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography sx={bodyText}>
                      <strong>Kinh nghiệm làm việc:</strong> {user.experience}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={bodyText}>
                      <strong>Hình thức làm việc:</strong> {user.employmentType}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography sx={bodyText}>
                  <strong>Địa chỉ làm việc:</strong> {user.workAddress}
                </Typography>
                <Typography sx={bodyText}>
                  <strong>Mục tiêu nghề nghiệp:</strong> {user.careerGoal}
                </Typography>
                <Typography sx={bodyText}>
                  <strong>Kỹ năng:</strong> {user.skills}
                </Typography>
              </Box>
            </CustomContainer>
          </Box>

          <Box mt={4}>
            <CustomContainer>
              <Box sx={{ p: 3, pb: 0 }}>
                <Typography variant="h3" gutterBottom>
                  Học vấn
                </Typography>
                <Divider sx={{ mb: 2 }} />
                {user.education_informations.map((education, index) => (
                  <Box key={index} mb={3}>
                    {index !== 0 && (
                      <Divider sx={{ my: 3, width: '80%', marginX: 'auto' }} />
                    )}
                    <Typography sx={bodyText}>
                      <strong>Trường:</strong> {education.schoolName}
                    </Typography>
                    <Typography sx={bodyText}>
                      <strong>Chuyên ngành:</strong> {education.specialization}
                    </Typography>
                    <Typography sx={bodyText}>
                      <strong>Bằng cấp:</strong> {education.degreeName}
                    </Typography>
                    <Typography sx={bodyText}>
                      <strong>Thời gian:</strong>{' '}
                      {dayjs(education.startDate).format('DD/MM/YYYY')} -{' '}
                      {education.endDate
                        ? dayjs(education.endDate).format('DD/MM/YYYY')
                        : 'Hiện tại'}
                    </Typography>
                  </Box>
                ))}
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
                {user.work_experiences.map((experience, index) => (
                  <Box key={index} mb={3}>
                    {index !== 0 && (
                      <Divider sx={{ my: 3, width: '80%', marginX: 'auto' }} />
                    )}
                    <Typography sx={bodyText}>
                      <strong>Công ty:</strong> {experience.companyName}
                    </Typography>
                    <Typography sx={bodyText}>
                      <strong>Vị trí:</strong> {experience.jobTitle}
                    </Typography>
                    <Typography sx={bodyText}>
                      <strong>Thời gian:</strong>{' '}
                      {dayjs(experience.startDate).format('DD/MM/YYYY')} -{' '}
                      {experience.endDate
                        ? dayjs(experience.endDate).format('DD/MM/YYYY')
                        : 'Hiện tại'}
                    </Typography>
                    <Typography sx={bodyText}>
                      <strong>Mô tả công việc:</strong>{' '}
                      {experience.jobDescription}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CustomContainer>
          </Box>
        </Box>
      </Container>
      <DownloadPage rootElementId="view-cv" downloadFileName={'CV.pdf'} />
    </>
  );
};

export default CVPage;
