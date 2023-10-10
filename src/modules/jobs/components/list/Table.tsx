import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import TableData from 'src/components/TableData';

const columns: GridColDef[] = [
  {
    field: 'jobTitle',
    headerName: 'Tên tin đăng',
    minWidth: 200
  },
  {
    field: 'positionLevel',
    headerName: 'Ngày đăng',
    minWidth: 150
  },
  {
    field: 'age',
    headerName: 'Thời gian nộp',
    minWidth: 150
  },
  {
    field: 'fullName',
    headerName: 'Lượt nộp',
    minWidth: 100,
    type: 'number'
  },
  {
    field: 'ag2e',
    headerName: 'Lượt xem',
    type: 'number',
    minWidth: 110
  },
  {
    field: 'ag22e',
    headerName: 'Tình trạng tin',
    minWidth: 150
  },
  {
    field: '2222',
    headerName: 'Trạng thái',
    minWidth: 150
  },
  {
    field: '2232',
    headerName: 'Khác',
    minWidth: 150
  }
];

export default function TableJobs({ data }) {
  return (
    <Box sx={{ height: '75vh', width: '100%' }}>
      <TableData rows={data} columns={columns} />
    </Box>
  );
}
