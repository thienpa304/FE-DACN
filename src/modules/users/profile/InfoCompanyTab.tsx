import { useApp } from "src/modules/app/hooks";
import InfoTab from "./Information/Content";
import BusinessIcon from '@mui/icons-material/Business';

export default function CompanyTab() {
  const { user } = useApp();
  const CompanyData = user => [
    { label: "Tên công ty", value: user.companyName },
    { label: "Địa chỉ công ty", value: user.companyLocation },
    { label: "Lĩnh vực", value: user.careerField },
    { label: "Mã số thuế", value: user.taxCode },
  ];
  return (
    <InfoTab
      user={user}
      data={CompanyData(user)}
      title="Thông tin công ty"
      editIcon={<BusinessIcon color="primary" sx={{ fontSize: 60 }} />}
      openForm={"Company"}
    />
  );
};