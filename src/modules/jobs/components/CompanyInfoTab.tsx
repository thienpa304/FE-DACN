import { Box, Typography } from '@mui/material';
import CustomContainer from 'src/components/CustomContainer';
import { InfoGrid } from 'src/modules/users/profile/Information/InfoField';
import BusinessIcon from '@mui/icons-material/Business';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import Link from 'src/components/Link';

const CompanyData = (company) => [
  { label: 'Tên công ty', value: company?.companyName },
  { label: 'Địa chỉ công ty', value: company?.companyLocation },
  { label: 'Lĩnh vực', value: company?.careerField },
  { label: 'Giới thiệu doanh nghiệp', value: company?.description }
];

export default function CompanyInfoTab(props) {
  const { sx, company } = props;

  return (
    <CustomContainer sx={{ px: 5, ...sx }}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <BusinessIcon color="primary" sx={{ fontSize: 56 }} />
          <Typography fontWeight={700} fontSize={22} lineHeight={3}>
            Thông tin công ty
          </Typography>
        </Box>
        <Link
          to={`/company/${rewriteUrl(company?.companyName)}?id=${btoa(
            company?.userId
          )}`}
          // state={{ id: company?.userId }}
          sx={{
            textDecoration: 'none',
            alignItems: 'center',
            alignContent: 'center'
          }}
        >
          Xem trang công ty
        </Link>
      </Box>
      {CompanyData(company)?.map((item, index) => (
        <InfoGrid key={index} item={item} />
      ))}
    </CustomContainer>
  );
}
