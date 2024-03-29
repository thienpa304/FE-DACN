import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomContainer from 'src/components/CustomContainer';
import { defaultImage } from 'src/constants/uploadFileRule';
import {
  InfoGrid,
  InputData,
  InputLabel
} from 'src/modules/users/profile/Information/InfoField';
import BusinessIcon from '@mui/icons-material/Business';
import LinkText from 'src/components/LinkText';
import JobCard from 'src/modules/jobs/components/JobCard';
import JobList from 'src/modules/jobs/components/JobList';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import CompanyInfoTab from 'src/modules/jobs/components/CompanyInfoTab';

const useStyles = makeStyles((theme) => ({
  coverImage: {
    width: '100%',
    height: '280px',
    objectFit: 'cover'
  },
  paper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const company = {
  companyName: 'The Dev',
  companyLocation: 'Hà Nội',
  careerField: 'IT',
  taxCode: '123456789',
  companyDescription: `Công ty Tài chính Shinhan Việt Nam (Shinhan Finance), trực thuộc Tổng Công ty Shinhan Card (Hàn Quốc), là Công ty Tài chính tiêu dùng 100% vốn nước ngoài (Trước đây là Công ty Tài chính Prudential Việt Nam (Prudential Finance), chính thức hoạt động dưới Thương hiệu Shinhan Finance từ năm 2019. Với sự kết hợp vững chắc giữa nền tảng công nghệ và các sản phẩm tài chính vượt trội của Shinhan Card cùng di sản hơn 10 năm kinh nghiệm phát triển thị trường cho vay tiêu dùng của Prudential Finance, Công ty Tài chính Shinhan Việt Nam cam kết nỗ lực để trở thành Công ty tài chính hỗ trợ khách hàng tốt nhất Việt Nam.

  Với mạng lưới kinh doanh phát triển rộng khắp trên toàn quốc, Công ty luôn tích cực tiếp cận, tư vấn và hỗ trợ khách hàng với những giải pháp tài chính cá nhân linh hoạt, giúp khách hàng hiện thực hóa ước mơ, nâng cao chất lượng cuộc sống. Công ty Tài chính Shinhan Việt Nam tự hào đã và đang được phục vụ hàng trăm ngàn khách hàng và ngày càng có thêm nhiều khách hàng tín nhiệm lựa chọn các sản phẩm và dịch vụ của Công ty. Công ty sẽ tiếp tục phát huy lợi thế kinh doanh, nâng cao chất lượng dịch vụ, đảm bảo chất lượng quản trị tín dụng và quản trị rủi ro, cam kết trở thành công ty tài chính tiêu dùng minh bạch và uy tín trên thị trường Việt Nam với triết lý kinh doanh đúng đắn: Phấn đấu trở thành một công ty “tốt nhất” hơn là một công ty có “lợi nhuận nhất”.`
};

const CompanyData = (company) => [
  { label: 'Tên công ty', value: company?.companyName },
  { label: 'Địa chỉ công ty', value: company?.companyLocation },
  { label: 'Lĩnh vực', value: company?.careerField },
  { label: 'Giới thiệu doanh nghiệp', value: company?.companyDescription }
];

const renderCoverImage = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={12}>
      <img
        src={defaultImage.companyCover}
        alt="cover"
        className={classes.coverImage}
      />
    </Paper>
  );
};

const renderAvatar = () => (
  <Avatar
    src={defaultImage.companyAvatar}
    sx={{
      width: 120,
      height: 120,
      bgcolor: '#a0b9cfc2',
      border: 2,
      borderColor: 'grey.300',
      mt: -5
    }}
  />
);

export default function index() {
  const {} = useQueryAllJob();
  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      {renderCoverImage()}
      <CustomContainer
        sx={{ flex: 1, display: 'flex', alignItems: 'center', px: 5 }}
      >
        {renderAvatar()}
        <Typography variant="h3" ml={2}>
          The Dev
        </Typography>
      </CustomContainer>
      <CompanyInfoTab />
      <JobList
        pageTitle={`Việc làm đang tuyển`}
        profession={''}
        queryJobs={useQueryAllJob}
        numOfJobPerPage={5}
        sx={{ p: 0 }}
      />
    </Container>
  );
}
