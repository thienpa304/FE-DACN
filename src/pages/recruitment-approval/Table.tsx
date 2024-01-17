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
import SelectInput from 'src/components/SelectInput';
import { useState } from 'react';
import useMutateJobStatus from 'src/modules/jobs/hooks/useMutateJobStatus';
import { ApprovalStatus } from 'src/constants/enum';

const renderJobTitle = (data) => {
  const navigate = useNavigate();
  const handleLinkToDetail = () => {
    navigate(`/job/${data.id}`);
  };
  return (
    <>
      <Grid container alignItems={'center'}>
        <Grid item xs={2}>
          <Tooltip title="Xem trực tiếp">
            <IconButton size="small" onClick={handleLinkToDetail}>
              <RemoveRedEyeIcon sx={{ width: 18, height: 18, color: 'gray' }} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={10}>
          <LinkText to={`/employer/recruitment/list/${data.id}`}>
            {data.value}
          </LinkText>
        </Grid>
      </Grid>
    </>
  );
};

const renderStatus = (data) => {
  const initValue = APPROVAL_STATUS.find(
    (item) => item.label === data.value
  ).value;
  const { mutate } = useMutateJobStatus();
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
    field: 'jobTitle',
    headerName: 'Tên tin đăng',
    minWidth: 250,
    renderCell: renderJobTitle
  },
  {
    field: 'name',
    headerName: 'Người đăng',
    minWidth: 150
  },
  {
    field: 'publishingDate',
    headerName: 'Ngày đăng',
    minWidth: 150
  },

  {
    field: 'fullName',
    headerName: 'Lượt nộp',
    minWidth: 100,
    type: 'number',
    align: 'center',
    renderCell: () => <>0</>
  },
  {
    field: 'age',
    headerName: 'Lượt xem',
    type: 'number',
    minWidth: 110,
    align: 'center',
    renderCell: () => <>0</>
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
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
