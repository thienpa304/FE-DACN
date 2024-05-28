import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  Container,
  Divider
} from '@mui/material';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import useMutateDegree from './hooks/useMutateDegree';
import useMutateUpdateDegree from './hooks/useMutateUpdateDegree';
import useMutateDeleteDegree from './hooks/useMutateDeleteDegree';
import EditDataGrid from 'src/components/EditDataGrid';
import useOnlineProfile from '../../hooks/useOnlineProfile';
import { useResponsive } from 'src/utils/responsive';

function Degree() {
  const { isMobile } = useResponsive();
  const { profile } = useOnlineProfile();
  const { onSaveData } = useMutateDegree();
  const { onSaveDataById } = useMutateUpdateDegree();
  const { onDeleteDataById } = useMutateDeleteDegree();

  const [loading, setLoading] = useState(false);

  const handleSaveDegreeData = async (data) => {
    setLoading(true);
    const newData = { ...data };
    onSaveData(newData);
    setLoading(false);
  };

  const handleUpdateDegreeData = async (id, data) => {
    setLoading(true);
    const newData = { ...data };
    onSaveDataById([id, newData]);
    setLoading(false);
  };

  const handleDeleteDegreeData = async (id) => {
    setLoading(true);
    onDeleteDataById(id);
    setLoading(false);
  };

  const [rows, setRows] = useState<GridRowsProp>([]);

  useEffect(() => {
    if (profile?.another_degrees && profile.another_degrees.length > 0) {
      setRows(profile.another_degrees);
    }
  }, [profile]);

  const columns: GridColDef[] = [
    {
      field: 'degreeName',
      headerName: 'Chứng chỉ',
      width: !isMobile ? 420 : 190,
      editable: true
    },
    {
      field: 'level',
      headerName: 'Mức độ thành thạo',
      width: 410,
      editable: true
    }
  ];

  if (loading) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Container id="other_degree">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex">
          <Typography fontWeight={700} fontSize={21} lineHeight={3}>
            Những chứng chỉ khác
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box pt={3} pb={6}>
        <EditDataGrid
          rows={rows}
          columns={columns}
          title={'Thông tin chứng chỉ'}
          handleSave={handleSaveDegreeData}
          handleUpdate={handleUpdateDegreeData}
          handleDelete={handleDeleteDegreeData}
          profile={profile}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5
              }
            },
            columns: {
              columnVisibilityModel: {
                level: !isMobile,
                id: false
              }
            }
          }}
        />
      </Box>
    </Container>
  );
}

export default Degree;
