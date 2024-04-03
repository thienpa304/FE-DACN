import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid
} from '@mui/material';
import useQueryCandidateProfiles from 'src/modules/application/hooks/useQueryCandidateProfiles';
import Table from './Table';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { useState } from 'react';
import useQueryApplicationTotalResultsByEmployer from 'src/modules/application/hooks/useQueryApplicationTotalResultsByEmployer';
import { effect, signal } from '@preact/signals-react';

export const dataList = signal([]);

const CandidateProfiles = () => {
  const pageSize = 7;
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQueryCandidateProfiles({
    page: page,
    num: pageSize
  });
  const { totalResults, isLoading: isLoadingTotalResults } =
    useQueryApplicationTotalResultsByEmployer();

  const handleChangePage = (pageNum) => {
    setPage(() => pageNum);
  };
  dataList.value = data;

  if (isLoadingTotalResults) return <SuspenseLoader />;
  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
        marginTop={0}
      >
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Danh Sách ứng viên" />
            <Divider />
            <CardContent>
              <Table
                data={dataList.value}
                handleChangePage={handleChangePage}
                pageSize={pageSize}
                isLoading={isLoading}
                totalResults={totalResults}
                page={page}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CandidateProfiles;
