import { Box, Typography } from '@mui/material';
import CustomContainer from 'src/components/CustomContainer';
import { InfoGrid } from 'src/modules/users/profile/Information/InfoField';
import BusinessIcon from '@mui/icons-material/Business';
import useQueryCompany from 'src/modules/users/hooks/useQueryCompany';

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
      <Box display="flex">
        <BusinessIcon color="primary" sx={{ fontSize: 56 }} />
        <Typography fontWeight={700} fontSize={22} lineHeight={3}>
          Thông tin công ty
        </Typography>
      </Box>
      {CompanyData(company)?.map((item, index) => (
        <InfoGrid key={index} item={item} />
      ))}
    </CustomContainer>
  );
}
