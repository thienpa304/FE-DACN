import React, { useState, useEffect } from 'react';
import { Button, Snackbar, Alert, AlertTitle, Typography } from '@mui/material';
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import DeleteAlertDialog from 'src/components/DeleteAlertDialog';

const randomId = () =>
  `${Math.floor(Math.random() * 10000)}${Math.random()
    .toString(36)
    .substring(2, 7)}`;

interface EditToolbarProps {
  setCurrentRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

const EditDataGrid = (props) => {
  const { columns, rows, handleSave, handleUpdate, handleDelete, profile } =
    props;
  const [currentRows, setCurrentRows] = useState<GridRowsProp>([]);
  const [initialRows, setInitialRows] = useState<GridRowsProp>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [error, setError] = useState({ type: null, errorField: null });
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setCurrentRows(rows?.length > 0 ? rows : []);
    setInitialRows(rows?.length > 0 ? rows : []);
  }, [rows]);

  function EditToolbar(props: EditToolbarProps) {
    const { setCurrentRows, setRowModesModel } = props;

    const handleAddClick = () => {
      if (!profile?.userId) {
        setError({ type: 'noProfile', errorField: null });
        return;
      }
      if (currentRows[0]?.isNew) return;
      const id = randomId();
      const newRow = { id, isNew: true };
      const emptyRow = columns.reduce((acc, column) => {
        return { ...acc, [column.field]: '' };
      }, newRow);

      setCurrentRows((oldRows) => [emptyRow, ...oldRows]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: columns[0].field }
      }));
    };

    return (
      <GridToolbarContainer>
        <Button
          color="secondary"
          startIcon={<AddIcon />}
          onClick={handleAddClick}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
            Thêm mới
          </Typography>
        </Button>
      </GridToolbarContainer>
    );
  }

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setSelectedId(id);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setSelectedId(null);
    setOpenDialog(false);
  };

  const handleConfirmDelete = (id: GridRowId) => () => {
    setCurrentRows(currentRows.filter((row) => row.id !== id));
    handleDelete(id);
    setSelectedId(null);
    setOpenDialog(false);
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    });

    const editedRow = currentRows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setCurrentRows(currentRows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    let updatedRow;
    const existingRow = initialRows.find((row) => row.id === newRow.id);

    const invalidFields = columns
      .filter(
        (col) =>
          col.type === 'date' &&
          (!dayjs(newRow[col.field]).isValid() || newRow[col.field] === null)
      )
      .map((col) => col.headerName);

    const missingFields = columns
      .filter((col) => newRow[col.field] === '')
      .map((col) => col.headerName);

    for (const col of columns) {
      if (col.type === 'date') {
        newRow[col.field] = dayjs(newRow[col.field]).format('DD/MM/YYYY');
      }
    }

    if (missingFields.length > 0) {
      setError({ type: 'missing', errorField: `${missingFields.join(', ')}` });
      return;
    }
    if (invalidFields.length > 0) {
      setError({ type: 'invalid', errorField: `${invalidFields.join(', ')}` });
      return;
    }

    if (!existingRow) {
      updatedRow = { ...newRow, isNew: false };
      handleSave({ ...newRow });
    } else {
      updatedRow = { ...newRow, isNew: false };
      handleUpdate(newRow.id, updatedRow);
    }
    const rowList = currentRows.map((row) =>
      row.id === newRow.id ? updatedRow : row
    );
    setCurrentRows(rowList);
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const actionColumns: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Chỉnh sửa',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main'
              }}
              onClick={handleSaveClick(id)}
              key="save"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
              key="cancel"
            />
          ];
        }
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
            key="edit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
            key="delete"
          />
        ];
      }
    }
  ];

  const fullCols: GridColDef[] = [...columns, ...actionColumns];

  return (
    <>
      <DataGrid
        rows={currentRows}
        columns={fullCols}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        disableColumnMenu
        hideFooterSelectedRowCount
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        slots={{
          toolbar: EditToolbar
        }}
        slotProps={{
          toolbar: {
            setCurrentRows,
            setRowModesModel
          }
        }}
        getRowHeight={() => 'auto'}
        sx={{
          minHeight: 208,
          '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
          '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
            py: '15px'
          },
          '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
            py: '22px'
          },
          '.MuiDataGrid-columnHeaderTitle': { fontWeight: 700 }
        }}
      />
      <Snackbar
        open={error?.type}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={5000}
        onClose={() => setError({ type: null, errorField: null })}
      >
        <Alert severity="error">
          <AlertTitle>
            {error?.type === 'missing' && 'Chưa nhập đầy đủ thông tin'}
            {error?.type === 'invalid' && 'Thời gian không hợp lệ'}
            <strong>
              {error?.type === 'noProfile' &&
                'Vui lòng hoàn thành trước phần Thông tin chung!'}
            </strong>
          </AlertTitle>
          <strong>{error?.errorField}</strong>
        </Alert>
      </Snackbar>
      <DeleteAlertDialog
        open={openDialog}
        onClose={handleClose}
        handleConfirmDelete={handleConfirmDelete}
        selectedId={selectedId}
      />
    </>
  );
};

export default EditDataGrid;
