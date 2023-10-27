import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  Container,
  Divider
} from '@mui/material';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import useQueryOnlineProfile from '../hooks/useQueryOnlineProfile';
import useMutateDegree from './hooks/useMutateDegree';
import useMutateUpdateDegree from './hooks/useMutateUpdateDegree';
import useMutateDeleteDegree from './hooks/useMutateDeleteDegree';
import CustomDataGrid from 'src/components/EditDataGrid';

function Degree() {
  const { onlineProfile, isLoading } = useQueryOnlineProfile();
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
    if (
      onlineProfile?.another_degrees &&
      onlineProfile.another_degrees.length > 0
    ) {
      setRows(onlineProfile.another_degrees);
    }
  }, [onlineProfile]);

  const columns: GridColDef[] = [
    {
      field: 'degreeName',
      headerName: 'Chứng chỉ',
      width: 420,
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
        <CustomDataGrid
          rows={rows}
          columns={columns}
          handleSave={handleSaveDegreeData}
          handleUpdate={handleUpdateDegreeData}
          handleDelete={handleDeleteDegreeData}
        />
      </Box>
    </Container>
  );
}

export default Degree;
