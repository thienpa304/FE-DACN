import { Box, Typography } from '@mui/material';
import CustomContainer from 'src/components/CustomContainer';
import { InfoGrid } from 'src/modules/users/profile/Information/InfoField';
import BusinessIcon from '@mui/icons-material/Business';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import Link from 'src/components/Link';
import { textAlign } from 'html2canvas/dist/types/css/property-descriptors/text-align';

const CompanyData = (company) => [
  { label: 'Tên công ty', value: company?.companyName },
  { label: 'Địa chỉ công ty', value: company?.companyLocation },
  { label: 'Lĩnh vực', value: company?.careerField },
  { label: 'Giới thiệu doanh nghiệp', value: company?.description }
];

export default function CompanyInfoTab(props) {
  const { sx, company, companyPage = false } = props;

  return (
    <CustomContainer sx={{ px: 5, ...sx, minHeight: 300 }}>
      <Box
        sx={{ display: { xs: 'normal', sm: 'flex' } }}
        justifyContent="space-between"
      >
        <Box display="flex">
          <BusinessIcon color="primary" sx={{ fontSize: { sm: 56, xs: 46 } }} />
          <Typography
            fontWeight={700}
            sx={{ fontSize: { sm: 22, xs: 20 } }}
            lineHeight={3}
          >
            Thông tin công ty
          </Typography>
        </Box>
        {!companyPage && (
          <Link
            to={`/company/${rewriteUrl(company?.companyName)}?id=${btoa(
              company?.userId
            )}`}
            sx={{
              textDecoration: 'none',
              alignContent: 'center'
            }}
          >
            Xem trang công ty
          </Link>
        )}
      </Box>
      {CompanyData(company)?.map((item, index) => (
        <InfoGrid key={index} item={item} />
      ))}
    </CustomContainer>
  );
}
