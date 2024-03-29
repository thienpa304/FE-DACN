import { Box, Typography } from '@mui/material';
import CustomContainer from 'src/components/CustomContainer';
import { InfoGrid } from 'src/modules/users/profile/Information/InfoField';
import BusinessIcon from '@mui/icons-material/Business';
import useQueryCompany from 'src/modules/users/hooks/useQueryCompany';

// const company = {
//   companyName: 'The Dev',
//   companyLocation: 'Hà Nội',
//   careerField: 'IT',
//   taxCode: '123456789',
//   companyDescription: `Công ty Tài chính Shinhan Việt Nam (Shinhan Finance), trực thuộc Tổng Công ty Shinhan Card (Hàn Quốc), là Công ty Tài chính tiêu dùng 100% vốn nước ngoài (Trước đây là Công ty Tài chính Prudential Việt Nam (Prudential Finance), chính thức hoạt động dưới Thương hiệu Shinhan Finance từ năm 2019. Với sự kết hợp vững chắc giữa nền tảng công nghệ và các sản phẩm tài chính vượt trội của Shinhan Card cùng di sản hơn 10 năm kinh nghiệm phát triển thị trường cho vay tiêu dùng của Prudential Finance, Công ty Tài chính Shinhan Việt Nam cam kết nỗ lực để trở thành Công ty tài chính hỗ trợ khách hàng tốt nhất Việt Nam.

//     Với mạng lưới kinh doanh phát triển rộng khắp trên toàn quốc, Công ty luôn tích cực tiếp cận, tư vấn và hỗ trợ khách hàng với những giải pháp tài chính cá nhân linh hoạt, giúp khách hàng hiện thực hóa ước mơ, nâng cao chất lượng cuộc sống. Công ty Tài chính Shinhan Việt Nam tự hào đã và đang được phục vụ hàng trăm ngàn khách hàng và ngày càng có thêm nhiều khách hàng tín nhiệm lựa chọn các sản phẩm và dịch vụ của Công ty. Công ty sẽ tiếp tục phát huy lợi thế kinh doanh, nâng cao chất lượng dịch vụ, đảm bảo chất lượng quản trị tín dụng và quản trị rủi ro, cam kết trở thành công ty tài chính tiêu dùng minh bạch và uy tín trên thị trường Việt Nam với triết lý kinh doanh đúng đắn: Phấn đấu trở thành một công ty “tốt nhất” hơn là một công ty có “lợi nhuận nhất”.`
// };

const CompanyData = (company) => [
  { label: 'Tên công ty', value: company?.companyName },
  { label: 'Địa chỉ công ty', value: company?.companyLocation },
  { label: 'Lĩnh vực', value: company?.careerField },
  { label: 'Giới thiệu doanh nghiệp', value: company?.companyDescription }
];

export default function CompanyInfoTab(props) {
  const { sx } = props;
  const { company } = useQueryCompany();
  return (
    <CustomContainer sx={{ px: 5, ...sx }}>
      <Box display="flex">
        <BusinessIcon color="primary" sx={{ fontSize: 56 }} />
        <Typography fontWeight={700} fontSize={22} lineHeight={3}>
          Thông tin công ty
        </Typography>
      </Box>
      {CompanyData(company).map((item, index) => (
        <InfoGrid key={index} item={item} />
      ))}
    </CustomContainer>
  );
}
