import { Box, styled } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import useQueryCompanyfrom from './../hooks/useQueryCompany';
import InfoField from './Information/InfoField';
import CompanyCover from './Information/CompanyCover';
import SuspenseLoader from 'src/components/SuspenseLoader';

const CustomBox = styled(Box)(({ theme }) => ({
  background: '#ffff',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  boxShadow: '2px 2px 6px #aae2f7'
}));

export default function CompanyTab() {
  const { company, isLoading } = useQueryCompanyfrom();
  const CompanyData = (company) => [
    { label: 'Tên công ty', value: company?.companyName },
    { label: 'Địa chỉ công ty', value: company?.companyLocation },
    { label: 'Lĩnh vực', value: company?.careerField },
    { label: 'Mã số thuế', value: company?.taxCode },
    { label: 'Giới thiệu doanh nghiệp', value: company?.description }
  ];

  if (isLoading) return <SuspenseLoader />;
  return (
    <>
      <CustomBox sx={{ p: 0, pb: 2 }}>
        <CompanyCover />
      </CustomBox>
      <CustomBox>
        <InfoField
          user={company}
          data={CompanyData(company)}
          title="Thông tin công ty"
          editIcon={<BusinessIcon color="primary" sx={{ fontSize: 56 }} />}
          openForm={'Company'}
        />
      </CustomBox>
    </>
  );
}
