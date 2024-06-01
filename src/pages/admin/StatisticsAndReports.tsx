import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  Divider,
  Grid,
  Typography,
  styled
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
  Cell,
  ResponsiveContainer
} from 'recharts';
import SuspenseLoader from 'src/components/SuspenseLoader';
import useQueryJobPostingsReportByQuery from 'src/modules/admin/hooks/useQueryPostingsReportByQuery';
import useQueryCandidateStatisticsByQuery from 'src/modules/admin/hooks/useQueryCandidateStatisticsByQuery';
import { MonthCalendar, YearCalendar } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { useResponsive } from 'src/utils/responsive';

const ChartWrapper = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

const CalendarStyles = {
  maxWidth: '100%',
  maxHeight: 210,
  border: '1px solid #ccc',
  borderRadius: 2,
  p: 0,
  overflowY: 'auto'
};

const StatisticsAndReports = () => {
  const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#814289',
    '#344C64'
  ];
  const [selectedYear, setSelectedYear] = useState<Dayjs | null>(dayjs());
  const [selectedMonth, setSelectedMonth] = useState<Dayjs | null>(dayjs());

  const { isMobile, isTablet } = useResponsive();

  const { jobPostingData, isLoading: isLoadingJobData } =
    useQueryJobPostingsReportByQuery({
      year: selectedYear?.year(),
      month: selectedMonth && selectedMonth?.month() + 1
    });
  const { candidateStatistics, isLoading: isLoadingCandidate } =
    useQueryCandidateStatisticsByQuery({
      year: selectedYear?.year(),
      month: selectedMonth && selectedMonth?.month() + 1
    });

  const handleSatisticByMonth = (e) => {
    const isChecked = e.target.checked;
    if (!isChecked) setSelectedMonth(null);
    else setSelectedMonth(dayjs());
  };

  const formattedJobPostingData = jobPostingData?.map((item) => ({
    ...item,
    time:
      (dayjs(item?.time, 'MMM').isValid() &&
        dayjs(item?.time, 'MMM').format('MM')) ||
      item.time
  }));

  const XAxisInterval = useMemo(() => {
    if (!selectedMonth) return 0;
    return isMobile ? 3 : isTablet ? 2 : 1;
  }, [selectedMonth]);

  const handleDownloadExcel = () => {
    const statisticsData = [
      { data: jobPostingData, sheetName: 'Job_Posting' },
      { data: candidateStatistics, sheetName: 'Candidate' }
    ];

    const wb = XLSX.utils.book_new();

    statisticsData.forEach(({ data, sheetName }) => {
      const ws = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    saveAs(data, 'devices_data.xlsx');
  };

  if (isLoadingJobData || isLoadingCandidate) return <SuspenseLoader />;
  return (
    <Container maxWidth="xl">
      <Card>
        <CardHeader title="Thống kê và Báo cáo" />
        <Divider />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            my: 2,
            padding: 2
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            marginTop={0}
          >
            <Grid item sm={3} xs={12} mb={3}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleDownloadExcel}
              >
                Tải Excel
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  my: 2
                }}
              >
                <Typography variant="h4" textAlign={'center'}>
                  Thống kê theo năm
                </Typography>
              </Box>
              <YearCalendar
                value={selectedYear?.isValid() && dayjs(selectedYear)}
                onChange={(newValue) => setSelectedYear(newValue)}
                disableFuture
                maxDate={dayjs()}
                sx={{
                  ...CalendarStyles
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: 2
                }}
              >
                <Typography variant="h4" textAlign={'center'}>
                  Thống kê theo tháng
                </Typography>
                <Checkbox defaultChecked onChange={handleSatisticByMonth} />
              </Box>
              <MonthCalendar
                value={selectedMonth?.isValid() && dayjs(selectedMonth)}
                onChange={(newValue) => setSelectedMonth(newValue)}
                disableFuture={selectedYear?.year() === dayjs().year()}
                sx={{
                  ...CalendarStyles,
                  display: !selectedMonth && 'none'
                }}
              />
            </Grid>
            <Grid item sm={9} xs={12}>
              <Grid container rowGap={3}>
                <ChartWrapper item xs={12}>
                  <Typography variant="h4">Số lượng tin đăng tuyển</Typography>
                  <ResponsiveContainer width="100%" height={400}>
                    {formattedJobPostingData.length <= 0 ? (
                      <Typography
                        color="text.disabled"
                        textAlign="center"
                        sx={{ marginTop: 10 }}
                      >
                        Không có dữ liệu
                      </Typography>
                    ) : (
                      <LineChart
                        data={formattedJobPostingData}
                        margin={{ top: 30, right: 30, left: 0, bottom: 20 }}
                      >
                        <XAxis
                          dataKey="time"
                          label={{
                            value: selectedMonth ? 'Ngày' : 'Tháng',
                            position: 'insideBottom',
                            offset: -10
                          }}
                          tickSize={10}
                          interval={XAxisInterval}
                        />
                        <YAxis
                          type="number"
                          domain={[0, 'dataMax + 5']}
                          label={{
                            value: 'Tin đăng',
                            position: 'insideLeft',
                            angle: -90,
                            offset: 20
                          }}
                        />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="Tin đăng"
                          stroke="#8884d8"
                        />
                      </LineChart>
                    )}
                  </ResponsiveContainer>
                </ChartWrapper>
                <ChartWrapper item xs={12}>
                  <Typography variant="h4">Thống Kê Ứng Viên</Typography>
                  <ResponsiveContainer
                    width="80%"
                    height={isMobile ? 400 : 300}
                  >
                    {candidateStatistics.length <= 0 ? (
                      <Typography
                        color="text.disabled"
                        textAlign="center"
                        sx={{ marginTop: 10 }}
                      >
                        Không có dữ liệu
                      </Typography>
                    ) : (
                      <PieChart>
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
                          {candidateStatistics?.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                          ))}
                        </Pie>
                      </PieChart>
                    )}
                  </ResponsiveContainer>
                </ChartWrapper>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default StatisticsAndReports;
