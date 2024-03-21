import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import LinkText from 'src/components/LinkText';
import TableData from 'src/components/TableData';
import { Grid, Link } from '@mui/material';
import { APPROVAL_STATUS } from 'src/constants';
import useMutateApplicationStatus from 'src/modules/application/hooks/useMutateApplicatonStatus';
import { ApprovalStatus } from 'src/constants/enum';
import { useMemo, useState, forwardRef } from 'react';
import SelectInput from 'src/components/SelectInput';

interface CustomLinkProps {
  to?: string;
  children: React.ReactNode;
  sx?: any;
}

const CustomLink = forwardRef<HTMLButtonElement, CustomLinkProps>(
  (props, ref) => {
    const { to, children, sx } = props;

    const link = useMemo(() => {
      if (!to) return '#';
      return to;
    }, [to]);

    const isInternal = useMemo(() => {
      return link.startsWith('/') || link.startsWith('#');
    }, [link]);

    if (isInternal) {
      return (
        <LinkText ref={ref} to={link} sx={sx}>
          {children}
        </LinkText>
      );
    } else {
      return (
        <Link href={link} target="_blank" rel="noopener noreferrer" sx={sx}>
          {children}
        </Link>
      );
    }
  }
);

const renderJobTitle = (data) => {
  const url = data?.row?.CV ? data?.row?.CV : '#';
  return (
    <>
      <Grid container alignItems={'center'}>
        <CustomLink
          to={url}
          sx={{
            color: '#319fce',
            ':hover': {
              textDecoration: 'none'
            }
          }}
        >
          {data.value || '#'}
        </CustomLink>
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
    minWidth: 200
  },
  {
    field: 'applicationType',
    headerName: 'Loại hồ sơ',
    minWidth: 150
  },
  {
    field: 'status',
    headerName: 'Trạng thái tuyển dụng',
    minWidth: 200,
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
