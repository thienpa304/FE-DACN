import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import LinkText from 'src/components/LinkText';
import TableData from 'src/components/TableData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Chip, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import { APPROVAL_STATUS } from 'src/constants';
import useMutateApplicationStatus from 'src/modules/application/hooks/useMutateApplicatonStatus';
import { ApprovalStatus } from 'src/constants/enum';
import { useState } from 'react';
import SelectInput from 'src/components/SelectInput';

const renderJobTitle = (data) => {
  const navigate = useNavigate();
  const handleLinkToDetail = () => {
    navigate(`/job/${data.id}`);
  };
  return (
    <>
      <Grid container alignItems={'center'}>
        <LinkText to={`/employer/recruitment/list/${data.id}`}>
          {data.value}
        </LinkText>
      </Grid>
    </>
  );
};

const renderStatus = (data) => {
  const initValue = APPROVAL_STATUS.find(
    (item) => item.label === data.value
  ).value;

  const { mutate } = useMutateApplicationStatus();
  const [value, setValue] = useState(initValue);
  const handleChangeValue = (e) => {
    const value = e.target.value as ApprovalStatus;
    mutate([data.id, { status: value }]).then(() => {
      setValue(e.target.value);
    });
  };
  return (
    <SelectInput
      value={value}
      options={APPROVAL_STATUS}
      onChange={handleChangeValue}
    />
  );
};
const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Tên hồ sơ',
    minWidth: 250,
    renderCell: renderJobTitle
  },
  {
    field: 'publishingDate',
    headerName: 'Vị trí ứng tuyển',
    minWidth: 150
  },
  {
    field: 'publishingDate',
    headerName: 'Thời gian nộp',
    minWidth: 150
  },
  {
    field: 'applicationType',
    headerName: 'Loại hồ sơ',
    minWidth: 150
  },
  {
    field: 'status',
    headerName: 'Trạng thái tuyển dụng',
    minWidth: 150,
    renderCell: renderStatus
  }
];

export default function Table({ data }) {
  return (
    <Box sx={{ height: '75vh', width: '100%' }}>
      <TableData rows={data} columns={columns} />
    </Box>
  );
}
