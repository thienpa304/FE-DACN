import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import CompanyList from 'src/modules/company/components/CompanyList';
import useQueryCompanyListByUser from 'src/modules/company/hook/useQueryCompanyListByUser';

function ShowCompanyPage() {
  return (
    <CompanyList
      pageTitle="Công ty đang tuyển dụng"
      queryCompanys={useQueryCompanyListByUser}
    />
  );
}

export default ShowCompanyPage;
