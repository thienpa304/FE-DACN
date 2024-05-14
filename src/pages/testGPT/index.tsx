import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { getEmbedding } from 'src/modules/ai/sendChatGPTRequest';
import { GridColDef } from '@mui/x-data-grid';
import TableData from 'src/components/TableData';
import { Box, Button, Container, Typography } from '@mui/material';
import { dot } from 'mathjs';

const synList1 = [
  // 'Lập trình viên',
  // 'Kỹ sư điện tử',
  // 'Thợ cơ khí',
  // 'Kỹ thuật viên điều khiển',
  // 'Kiến trúc sư',
  // 'Kỹ sư cấu trúc',
  // 'Thợ sửa chữa ô tô',
  // 'Chuyên viên bảo trì',
  // 'Điều phối viên dự án',
  // 'Chuyên viên kỹ thuật',
  // 'Nhà quản lý sản xuất',
  // 'Kỹ sư môi trường',
  // 'Kỹ sư vật liệu',
  // 'Kỹ thuật viên điện tử',
  // 'Chuyên viên nghiên cứu',
  // 'Chuyên viên an ninh mạng',
  // 'Chuyên viên địa chất',
  // 'Kỹ sư cơ khí',
  // 'Truyền thông',
  // 'Kỹ thuật viên tự động hóa',
  // 'Chuyên gia tư vấn',
  // 'Phát triển phần mềm',
  // 'Chuyên viên giám sát',
  // 'Kỹ thuật viên xây dựng',
  // 'Chuyên viên kiểm định',
  // 'Chuyên viên tài chính',
  // 'Kỹ sư cảm biến',
  // 'Tự chủ',
  // 'Tự quản lý',
  // 'Xây dựng mục tiêu',
  // 'Giải quyết vấn đề',
  // 'Giao tiếp hiệu quả',
  // 'Lãnh đạo',

  'Hợp tác nhóm',
  'Tự quản lý',
  'Phát triển bản thân',
  'Thấu hiểu',
  'Tinh thần lạc quan',
  'Tinh thần kiên trì',
  'Giải quyết xung đột',
  'Thích nghi',
  'Lập trình viên Front-end',
  'Lập trình viên Back-end',
  'Lập trình viên Full-stack',
  'Mạng không dây',

  // bất động sản
  'Nhà môi giới nhà đất',
  'Đầu tư nhà đất',
  'Quản lý bất động sản',
  'Định giá bất động sản',
  'Triển khai dự án',
  'Quản lý bất động sản',
  'Buôn bán nhà đất',
  'Cho thuê nhà đất',
  'Luật bất động sản',
  'Tư vấn nhà đất',

  // IT
  'Kỹ sư máy móc',
  'Kỹ sư điện',
  'Kỹ sư kết cấu',
  'Nhà phát triển phần mềm',
  'Kỹ sư sinh thái',
  'Kỹ sư robot',
  'Kỹ sư chất liệu',
  'Kỹ sư điện lực',
  'Kỹ sư tự động hóa và điều khiển'
];

const synList2 = [
  // Dong nghia
  // 'Nhà phát triển phần mềm',
  // 'Kỹ sư điện',
  // 'Thợ máy',
  // 'Kỹ sư điều khiển',
  // 'Kiến trúc đồ họa',
  // 'Kỹ sư xây dựng',
  // 'Kỹ thuật viên ô tô',
  // 'Kỹ thuật viên bảo trì',
  // 'Quản lý dự án',
  // 'Kỹ sư công nghệ',
  // 'Quản lý sản xuất',
  // 'Chuyên gia bảo vệ môi trường',
  // 'Kỹ sư vật liệu xây dựng',
  // 'Kỹ thuật viên viễn thông',
  // 'Nhà khoa học nghiên cứu',
  // 'Kỹ sư an ninh thông tin',
  // 'Kỹ sư địa chất',
  // 'Kỹ sư máy móc',
  // 'Truyền hình',
  // 'Kỹ sư tự động hóa',
  // 'Nhà tư vấn',
  // 'Phát triển ứng dụng',
  // 'Quản lý giám sát',
  // 'Kỹ sư xây dựng',
  // 'Kỹ sư kiểm định',
  // 'Kế toán viên',
  // 'Kỹ sư điều khiển tự động',
  // 'Tự điều hành',
  // 'Quản lý bản thân',
  // 'Đặt mục tiêu',
  // 'Giải quyết khó khăn',
  // 'Kỹ năng giao tiếp',
  // 'Lãnh đạo nhóm',

  'Làm việc nhóm',
  'Tự chủ',
  'Tự phát triển',
  'Hiểu biết',
  'Tinh thần tích cực',
  'Sự kiên nhẫn',
  'Giải quyết mâu thuẫn',
  'Thích ứng',
  'Phát triển Front-end',
  'Phát triển Back-end',
  'Phát triển Full-stack',
  'Mạng vô tuyến',

  // bất động sản
  'Môi giới bất động sản',
  'Đầu tư bất động sản',
  'Quản lý tài sản',
  'Thẩm định giá trị bất động sản',
  'Phát triển dự án',
  'Quản lý tòa nhà',
  'Kinh doanh bất động sản',
  'Cho thuê bất động sản',
  'Pháp lý bất động sản',
  'Tư vấn bất động sản',

  // IT
  'Kỹ sư cơ khí',
  'Kỹ sư điện tử',
  'Kỹ sư xây dựng',
  'Kỹ sư phần mềm',
  'Kỹ sư môi trường',
  'Kỹ sư tự động hóa',
  'Kỹ sư vật liệu',
  'Kỹ sư năng lượng',
  'Kỹ sư điều khiển và đo lường'
];

const randomList1 = [
  'Quan hệ quốc tế',
  'Đại sứ',
  'Công sứ',
  'Lãnh sự',
  'Ngoại giao kinh tế',
  'Chính sách đối ngoại',
  'Hội nghị quốc tế',
  'Đàm phán ngoại giao',
  'Đại diện ngoại giao',
  'Hiệp định song phương',
  'Hiệp định đa phương',
  'Công ước quốc tế',
  'Thỏa thuận quốc tế',
  'Công hàm',
  'Thư ủy nhiệm',
  'Cố vấn ngoại giao',
  'Công tác lãnh sự',
  'Hòa giải quốc tế',
  'Công nhận ngoại giao',
  'Liên minh quốc tế',
  'Luật sư',
  'Luật pháp',
  'Tư pháp',
  'Luật dân sự',
  'Luật hình sự',
  'Tư vấn pháp lý',
  'Biên bản',
  'Hợp đồng',
  'Tòa án',
  'Tố tụng',
  'Quyền lợi',
  'Trách nhiệm pháp lý',
  'Luật doanh nghiệp',
  'Luật lao động',
  'Luật thương mại',
  'Luật quốc tế',
  'Biên bản xử lý vi phạm',
  'Văn bản pháp luật',
  'Thừa nhận tội',
  'Hòa giải pháp lý'
];

const randomList2 = [
  'Giáo viên',
  'Học sinh',
  'Chương trình giảng dạy',
  'Đào tạo',
  'Phương pháp giảng dạy',
  'Học liệu',
  'Giáo dục tiểu học',
  'Giáo dục trung học',
  'Giáo dục đại học',
  'Giáo dục nghề nghiệp',
  'Sư phạm',
  'Kiểm tra đánh giá',
  'Quản lý giáo dục',
  'Tư vấn học đường',
  'Dạy học trực tuyến',
  'Giáo dục đặc biệt',
  'Phát triển kỹ năng',
  'Công nghệ giáo dục',
  'Giáo dục toàn diện',
  'Học tập suốt đời',
  'Điện tử học',
  'Công nghệ điện tử',
  'Thiết kế vi mạch',
  'Điện tử tiêu dùng',
  'Điện tử công nghiệp',
  'Điện tử nguồn',
  'Thiết kế PCB',
  'Vi điều khiển',
  'Điện tử số',
  'Thiết bị điện tử',
  'Điện tử tự động',
  'Cảm biến điện tử',
  'Điện tử mạch',
  'Kỹ thuật điện tử',
  'Điện tử công suất',
  'Viễn thông',
  'Điện tử viễn thông',
  'Điện tử dân dụng',
  'Điện tử công cụ',
  'Kỹ sư điện tử'
];

const columns: GridColDef[] = [
  {
    field: 'employer_Requirement',
    headerName: 'Keyword 1',
    width: 250,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'employee_Profile',
    headerName: 'Keyword 2',
    width: 250,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'similarity',
    headerName: 'Cosine similarity',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    sortable: true
  }
];

export default function testGPT() {
  const [data, setData] = useState<any[]>([]);
  const handleGetEmbedding = async () => {
    getEmbedding([
      {
        id: 1,
        employer_Requirement: randomList1,
        employee_Profile: randomList2
      }
    ]).then((response) => {
      console.log(response);
      const analyzedData = response.map((item: any) => {
        return item.employer_Requirement.map((req: any, index: number) => {
          return {
            id: index + 1,
            employer_Requirement: req.word,
            employee_Profile: item.employee_Profile[index].word,
            similarity: dot(req.result, item.employee_Profile[index].result)
          };
        });
      });
      setData(analyzedData[0]);
    });
  };
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button variant="contained" onClick={handleGetEmbedding}>
        Analyze
      </Button>
      <Typography fontSize={18} fontWeight={700} m={2}>
        Tính toán độ tương đồng từ khóa
      </Typography>
      <TableData
        rows={data}
        columns={columns}
        hideFooter
        sx={{
          minHeight: '100%',
          // width: '100%',
          ' .MuiDataGrid-columnHeader': {
            backgroundColor: '#dfd0fe',
            color: '#333',
            // fontSize: 16,
            borderStartLeftRadius: 2,
            borderStartEndRadius: 2,
            lineHeight: 2
          }
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100
            }
          }
        }}
        density="compact"
        showCellVerticalBorder
        showColumnVerticalBorder
      />
    </Box>
  );
}
