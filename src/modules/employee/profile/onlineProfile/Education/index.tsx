import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Divider
} from '@mui/material';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import FormControl from 'src/components/FormControl';
import { useForm } from 'react-hook-form';
import { EducationInformation } from '../../../model';
import useQueryOnlineProfile from '../hooks/useQueryOnlineProfile';
import useMutateEducation from './hooks/useMutateEducation';
import useMutateUpdateEducation from './hooks/useMutateUpdateEducation';
import useMutateDeleteEducation from './hooks/useMutateDeleteEducation';
import dayjs from 'dayjs';
import CustomDataGrid from 'src/components/EditDataGrid';

export default function Education() {
  const [loading, setLoading] = useState(false);
  const { onlineProfile, isLoading } = useQueryOnlineProfile();
  const { onSaveData } = useMutateEducation();
  const { onSaveDataById } = useMutateUpdateEducation();
  const { onDeleteDataById } = useMutateDeleteEducation();

  const [rows, setRows] = useState<GridRowsProp>([]);

  const processData = (rows: GridRowsProp) => {
    rows.map((row) => {
      row.startDate = dayjs(row.startDate).format('DD-MM-YYYY')
      row.endDate = dayjs(row.endDate).format('DD-MM-YYYY')
    })
  }

  useEffect(() => {
    const initialRows: GridRowsProp = onlineProfile?.education_informations;
    if (initialRows) processData(initialRows);
    setRows(
      onlineProfile?.education_informations?.length > 0 ? initialRows : []
    );
  }, [onlineProfile]);

  const handleSaveEducationData = async (data) => {
    setLoading(true);
    onSaveData(data);
    setLoading(false);
  };
  const handleUpdateEducationData = async (id, data) => {
    setLoading(true);
    onSaveDataById([id, data]);
    setLoading(false);
  };
  const handleDeleteEducationData = async (id) => {
    setLoading(true);
    onDeleteDataById(id);
    setLoading(false);
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
      },
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
      },
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
        <CustomDataGrid
          rows={rows}
          columns={columns}
          handleSave={handleSaveEducationData}
          handleUpdate={handleUpdateEducationData}
          handleDelete={handleDeleteEducationData}
        />
      </Box>
    </Container>
  );
}
