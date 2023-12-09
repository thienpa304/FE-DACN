import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Divider,
  Alert,
  AlertTitle,
  Snackbar
} from '@mui/material';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import useQueryOnlineProfile from '../../hooks/useQueryOnlineProfile';
import useMutateEducation from './hooks/useMutateEducation';
import useMutateUpdateEducation from './hooks/useMutateUpdateEducation';
import useMutateDeleteEducation from './hooks/useMutateDeleteEducation';
import dayjs from 'dayjs';
import EditDataGrid from 'src/components/EditDataGrid';
import useOnlineProfile from '../../hooks/useOnlineProfile';

export default function Education() {
  const { profile } = useOnlineProfile();
  const { onSaveData } = useMutateEducation();
  const { onSaveDataById } = useMutateUpdateEducation();
  const { onDeleteDataById } = useMutateDeleteEducation();

  const [rows, setRows] = useState<GridRowsProp>([]);
  const [error, setError] = useState({ state: false, message: '' });

  const processData = (rows: GridRowsProp) => {
    rows.map((row) => {
      row.startDate = dayjs(row.startDate).format('DD-MM-YYYY');
      row.endDate = dayjs(row.endDate).format('DD-MM-YYYY');
    });
  };

  useEffect(() => {
    const rows = profile?.education_informations;
    const initialRows = rows ? JSON.parse(JSON.stringify(rows)) : [];
    if (initialRows) processData(initialRows);
    setRows(profile?.education_informations?.length > 0 ? initialRows : []);
  }, [profile]);

  const validation = (data) => {
    if (
      dayjs(data.startDate, 'DD-MM-YYYY').isAfter(
        dayjs(data.endDate, 'DD-MM-YYYY')
      )
    ) {
      setError({ state: true, message: 'Ngày kết thúc phải sau ngày bắt đầu' });
      return false;
    }
    return true;
  };

  const handleSaveEducationData = (data) => {
    if (validation(data)) onSaveData(data);
  };
  const handleUpdateEducationData = (id, data) => {
    if (validation(data)) onSaveDataById([id, data]);
  };
  const handleDeleteEducationData = (id) => {
    onDeleteDataById(id);
  };

  const columns: GridColDef[] = [
    {
      field: 'schoolName',
      headerName: 'Trường/ Trung tâm đào tạo',
      width: 240,
      editable: true
    },
    {
      field: 'specialization',
      headerName: 'Chuyên ngành',
      width: 220,
      editable: true
    },
    {
      field: 'degreeName',
      headerName: 'Tên chứng chỉ',
      width: 150,
      editable: true
    },
    {
      field: 'startDate',
      headerName: 'Bắt đầu',
      type: 'date',
      width: 110,
      editable: true,
      valueGetter: (params) => {
        return dayjs(params.value, 'DD-MM-YYYY').toDate();
      },
      valueFormatter(params) {
        return dayjs(params.value).format('DD-MM-YYYY');
      }
    },
    {
      field: 'endDate',
      headerName: 'Kết thúc',
      type: 'date',
      width: 110,
      editable: true,
      valueGetter: (params) => {
        return dayjs(params.value, 'DD-MM-YYYY').toDate();
      },
      valueFormatter(params) {
        return dayjs(params.value).format('DD-MM-YYYY');
      }
    }
  ];

  return (
    <Container id="education">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex">
          <Typography fontWeight={700} fontSize={21} lineHeight={3}>
            Thông tin học vấn
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box pt={3} pb={6}>
        <EditDataGrid
          rows={rows}
          columns={columns}
          handleSave={handleSaveEducationData}
          handleUpdate={handleUpdateEducationData}
          handleDelete={handleDeleteEducationData}
        />
      </Box>

      <Snackbar
        open={error?.state}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={3000}
        onClose={() => setError({ state: false, message: '' })}
      >
        <Alert severity="error">
          <AlertTitle>
            <strong>{error?.message}</strong>
          </AlertTitle>
          Dữ liệu của bạn sẽ không được lưu
        </Alert>
      </Snackbar>
    </Container>
  );
}
