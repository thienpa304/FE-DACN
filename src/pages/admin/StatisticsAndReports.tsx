import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import {
  BarChart,
  Bar,
  PieChart, // Corrected component name
  Pie, // Corrected component name
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from 'recharts';
import useQueryJobPostingsReport from 'src/modules/admin/hooks/useQueryPostingsReport';
import useQueryCandidateStatistics from 'src/modules/admin/hooks/useQueryCandidateStatistics';

const StatisticsAndReports = () => {
  // Example Data
  // const jobPostingData = [
  //   { name: 'January', value: 65 },
  //   { name: 'February', value: 59 },
  //   { name: 'March', value: 80 },
  //   { name: 'April', value: 81 },
  //   { name: 'May', value: 56 }
  // ];

  const applicantData = [
    { name: 'Engineer', value: 12 },
    { name: 'Designer', value: 19 },
    { name: 'Manager', value: 3 },
    { name: 'Analyst', value: 5 },
    { name: 'Developer', value: 2 }
  ];

  const recruitmentStatusData = [
    { name: 'Chờ duyệt', value: 10 },
    { name: 'Đã duyệt', value: 5 },
    { name: 'Từ chối', value: 8 },
    { name: 'Hết hạn', value: '5' }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#814289'];

  const { jobPostingData } = useQueryJobPostingsReport();
  const { candidateStatistics } = useQueryCandidateStatistics();

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
            <CardHeader title="Thống kê và Báo cáo" />
            <Divider />
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  {/* Bar Chart - Job Postings */}
                  <Typography variant="h6">
                    Số Lượng Công Việc Đăng Tuyển
                  </Typography>
                  <BarChart
                    width={500}
                    height={350}
                    data={jobPostingData}
                    margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis
                      dataKey="name"
                      label={{
                        value: 'Tháng',
                        position: 'insideBottomRight',
                        offset: 0
                      }}
                    />
                    <YAxis
                      type="number"
                      domain={[0, 'dataMax + 5']}
                      label={{
                        value: 'Công việc',
                        position: 'insideLeft',
                        angle: -90,
                        offset: 15
                      }}
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6">Thống Kê Ứng Viên</Typography>
                  <PieChart width={300} height={300}>
                    <Tooltip />
                    <Legend />
                    <Pie
                      data={candidateStatistics}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={80}
                      fill="#8884d8"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {applicantData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    {/* Corrected component name */}
                  </PieChart>
                </Grid>
              </Grid>
              {/* Line Chart - Recruitment Status */}
              <Typography variant="h6">Tình Trạng Tuyển Dụng</Typography>
              <LineChart
                width={600}
                height={300}
                data={recruitmentStatusData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StatisticsAndReports;
