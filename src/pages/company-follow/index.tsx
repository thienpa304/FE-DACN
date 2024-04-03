import { Box, Grid, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import CompanyCard from 'src/modules/company/components/CompanyCard';
import useQueryFollowCompany from 'src/modules/company/hook/useQueryFollowCompany';

export default function JobFollow() {
  const { companyFollow } = useQueryFollowCompany();
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    const newList = companyFollow?.map((company) => {
      return {
        maxSalary: company?.maxSalary,
        minSalary: company?.minSalary,
        postId: company?.postId,
        workAddress: company?.workAddress,
        jobTitle: company?.jobTitle,
        employer: {
          companyName: company?.companyName,
          logo: company?.logo
        }
      };
    });
    setCompanyList(() => newList);
  }, [companyFollow]);

  return (
    <Box p={3}>
      <Grid container mb={3} spacing={2}>
        {companyFollow?.map((company, index) => (
          <Grid key={company.postId} item xs={12} sm={4}>
            <CompanyCard
              key={index}
              company={company}
              employerId={company?.employerId}
            />
          </Grid>
        ))}
      </Grid>
      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      /> */}
    </Box>
  );
}
