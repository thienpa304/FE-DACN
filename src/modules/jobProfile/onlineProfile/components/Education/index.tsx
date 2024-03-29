import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Divider,
  Alert,
  AlertTitle,
  Snackbar,
  styled
} from '@mui/material';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import useQueryOnlineProfile from '../../hooks/useQueryOnlineProfile';
import useMutateEducation from './hooks/useMutateEducation';
import useMutateUpdateEducation from './hooks/useMutateUpdateEducation';
import useMutateDeleteEducation from './hooks/useMutateDeleteEducation';
import dayjs from 'dayjs';
import EditDataGrid from 'src/components/EditDataGrid';
import useOnlineProfile from '../../hooks/useOnlineProfile';
import { toOutputDateString } from 'src/utils/inputOutputFormat';
import DatePicker from 'src/components/DatePicker';

const DatePickerStyle = {
  '.css-i4bv87-MuiSvgIcon-root': {
    height: '14px',
    width: '14px'
  },
  '.css-1qrfzum-MuiButtonBase-root-MuiIconButton-root': {
    paddingX: '0px',
    marginRight: '-5px'
  },
  '.css-yykmq0-MuiInputBase-input-MuiOutlinedInput-input': {
    paddingX: 0,
    marginX: 0
  },
  '.css-33lv7h-MuiInputBase-root-MuiOutlinedInput-root': {
    fontSize: '12px',
    paddingRight: 0,
    paddingLeft: '-100px'
  }
};

export default function Education() {
  const { profile, setProfile } = useOnlineProfile();
  const { onSaveData } = useMutateEducation();
  const { onSaveDataById } = useMutateUpdateEducation();
  const { onDeleteDataById } = useMutateDeleteEducation();

  const [rows, setRows] = useState<GridRowsProp>([]);
  const [error, setError] = useState({ state: false, message: '' });

  const processData = (rows: GridRowsProp) => {
    rows.map((row) => {
      row.startDate = toOutputDateString(row.startDate);
      row.endDate = toOutputDateString(row.endDate);
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
      dayjs(data.startDate, 'DD/MM/YYYY').isAfter(
        dayjs(data.endDate, 'DD/MM/YYYY')
      )
    ) {
      setError({ state: true, message: 'Ngày kết thúc phải sau ngày bắt đầu' });
      return false;
    }
    return true;
  };

  const handleSaveEducationData = (data) => {
    if (validation(data)) {
      onSaveData(data);
      // console.log(data);
      // const prevList = profile?.education_informations || [];
      // const eduList = [...prevList, { ...data }];
      // setProfile({ education_informations: eduList });
    }
  };
  const handleUpdateEducationData = (id, data) => {
    if (validation(data)) {
      onSaveDataById([id, data]);
      // const index = profile?.education_informations?.findIndex(
      //   (item) => item.id === data.id
      // );
      // debugger;
      // if (index !== -1) {
      //   const eduList = [...profile?.education_informations] || [];
      //   eduList[index] = data;
      //   setProfile({ education_informations: eduList });
      // }
    }
  };
  const handleDeleteEducationData = (id) => {
    onDeleteDataById(id);
    // const eduList = profile?.education_informations?.filter(
    //   (edu) => edu.id !== id
    // );
    // setProfile({ education_informations: eduList });
  };

  const handleDateChange = (params, date) => {
    console.log(params, date);

    params.api.setEditCellValue({
      ...params,
      value: date // Cập nhật giá trị đã chọn từ DatePicker vào row
    });
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
        return dayjs(params.value, 'DD/MM/YYYY').toDate();
      },
      valueFormatter(params) {
        return toOutputDateString(params.value);
      },
      renderEditCell: (params) => {
        return (
          <DatePicker
            sx={DatePickerStyle}
            onChange={(e) => handleDateChange(params, e)}
            value={params.value}
          />
        );
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
        return toOutputDateString(params.value);
      },
      renderEditCell: (params) => {
        return (
          <DatePicker
            sx={DatePickerStyle}
            onChange={(e) => handleDateChange(params, e)}
            value={params.value}
          />
        );
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
          profile={profile}
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
        autoHideDuration={5000}
        onClose={() => setError({ state: false, message: '' })}
      >
        <Alert severity="error">
          <AlertTitle>
            <strong>{error?.message}</strong>
          </AlertTitle>
          Dữ liệu của bạn sẽ không được lưu lại
        </Alert>
      </Snackbar>
    </Container>
  );
}
