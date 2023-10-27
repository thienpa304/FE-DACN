import React, { useState, useEffect } from 'react';
import {
  Button,
  Snackbar,
  Alert,
  AlertTitle
} from '@mui/material';
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
import { createStyles, makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';

const useStyles = makeStyles((theme) =>
  createStyles({
    column: {
      fontWeight: 700
    },
    cell: {
      '& .MuiDataGrid-cellContent': {
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'normal',
        wordWrap: 'break-word'
      }
    }
  })
);

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

const CustomDataGrid = (props) => {
  const classes = useStyles();
  const { columns, rows, handleSave, handleUpdate, handleDelete } = props;
  const [currentRows, setCurrentRows] = useState<GridRowsProp>([]);
  const [initialRows, setInitialRows] = useState<GridRowsProp>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setCurrentRows(rows?.length > 0 ? rows : []);
    setInitialRows(rows?.length > 0 ? rows : []);
  }, [rows]);

  function EditToolbar(props: EditToolbarProps) {
    const { setCurrentRows, setRowModesModel } = props;

    const handleAddClick = () => {
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
          Thêm mới
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
    setCurrentRows(currentRows.filter((row) => row.id !== id));
    handleDelete(id);
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
    const missingFields = [];
    for (const col of columns) {
      if (newRow[col.field] === '') {
        missingFields.push(col.headerName);
      }
      if (col.type === 'date') {
        newRow[col.field] = dayjs(newRow[col.field]).format('DD-MM-YYYY')
      }
    }

    if (missingFields.length > 0) {
      const missingFieldsMessage = `${missingFields.join(', ')}`;
      setError(missingFieldsMessage);
      return;
    }

    if (!existingRow) {
      updatedRow = { ...newRow, isNew: false };
      handleSave({ ...newRow });
    } else {
      updatedRow = { ...newRow, isNew: false };
      handleUpdate(newRow.id, updatedRow);
    }
    const tmp = currentRows.map((row) =>
      row.id === newRow.id ? updatedRow : row
    );
    setCurrentRows(tmp);
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
        sx={{ minHeight: 220 }}
        classes={{ columnHeaderTitle: classes.column, cell: classes.cell }}
      />
      <Snackbar
        open={error}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={3000}
        onClose={() => setError(null)}
      >
        <Alert severity="error">
          <AlertTitle>Chưa nhập đầy đủ thông tin</AlertTitle>
          <strong>{error}</strong>
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomDataGrid;
