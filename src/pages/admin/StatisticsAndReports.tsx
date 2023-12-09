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
  Legend
} from 'recharts';

const StatisticsAndReports = () => {
  // Example Data
  const jobPostingData = [
    { name: 'January', value: 65 },
    { name: 'February', value: 59 },
    { name: 'March', value: 80 },
    { name: 'April', value: 81 },
    { name: 'May', value: 56 }
  ];

  const applicantData = [
    { name: 'Engineer', value: 12 },
    { name: 'Designer', value: 19 },
    { name: 'Manager', value: 3 },
    { name: 'Analyst', value: 5 },
    { name: 'Developer', value: 2 }
  ];

  const recruitmentStatusData = [
    { name: 'Open', value: 10 },
    { name: 'Closed', value: 5 },
    { name: 'In Progress', value: 8 }
  ];

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
                    height={300}
                    data={jobPostingData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </Grid>
                <Grid item xs={4}>
                  {/* Pie Chart - Applicant Statistics */}
                  <Typography variant="h6">Thống Kê Ứng Viên</Typography>
                  <PieChart width={300} height={300}>
                    {' '}
                    {/* Corrected component name */}
                    <Tooltip />
                    <Legend />
                    <Pie
                      data={applicantData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={80}
                      fill="#8884d8"
                    />{' '}
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
                <Legend />
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
