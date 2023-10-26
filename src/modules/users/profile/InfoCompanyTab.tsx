import { useApp } from 'src/modules/app/hooks';
import useQueryCompanyfrom from './../hooks/useQueryCompany';
import InfoTab from './Information/InfoTab';
import BusinessIcon from '@mui/icons-material/Business';
import { Box, Container, styled } from '@mui/material';
import CompanyImage from './Information/CompanyImage';

const CustomBox = styled(Box)(({ theme }) => ({
  background: '#ffff',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  boxShadow: '2px 2px 6px #aae2f7'
}));

export default function CompanyTab() {
  const { company } = useQueryCompanyfrom();
  const CompanyData = (company) => [
    { label: 'Tên công ty', value: company?.companyName },
    { label: 'Địa chỉ công ty', value: company?.companyLocation },
    { label: 'Lĩnh vực', value: company?.careerField },
    { label: 'Mã số thuế', value: company?.taxCode }
  ];
  return (
    <>
      <CustomBox sx={{ p: 0, pb: 2 }}>
        <CompanyImage />
      </CustomBox>
      <CustomBox>
        <InfoTab
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
