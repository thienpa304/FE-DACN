import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import React from 'react';
import { styled } from '@mui/material/styles';

const TableDataWrapper = styled(DataGrid)(({ theme }) => ({
  padding: 8,
  border: 'none',
  '& .MuiDataGrid-cell, .MuiDataGrid-columnHeader': {
    '&:focus-within': {
      outline: 'none'
    }
  },
  '& .MuiDataGrid-row:hover': {
    backgroundColor: 'inherit'
  }
}));
const HeaderTitleWrapper = styled(`div`)(({ theme }) => ({
  color: theme.colors.alpha.black[100],
  fontWeight: 600
}));

const TableData: React.FC<DataGridProps> = ({ rows, columns, ...props }) => {
  const columnsDefault = columns.map((item) => ({
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderHeader: () => (
      <HeaderTitleWrapper>{item.headerName}</HeaderTitleWrapper>
    ),
    ...item
  }));
  return (
    <TableDataWrapper
      rows={rows}
      columns={columnsDefault}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10
          }
        }
      }}
      // disableColumnSelector
      rowSelection={false}
      // pageSizeOptions={[10]}
      {...props}
    />
  );
};

export default TableData;
