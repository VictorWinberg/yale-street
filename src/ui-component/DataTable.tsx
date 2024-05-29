import { useEffect } from 'react';

// material-ui
import { DataGrid, DataGridProps, GridActionsCellItem, GridColDef, GridRowModel, GridRowModes, useGridApiRef } from '@mui/x-data-grid';

// project imports
import useWindowDimension from '@/hooks/useWindowDimension';

// assets
import { Cancel, Delete, Edit, Save } from '@mui/icons-material';

// ==============================|| DATA TABLE ||============================== //

interface DataTableProps extends DataGridProps {
  rows: GridRowModel[];
  showActions?: boolean;
}

const DataTable = ({ columns, rows, showActions, ...rest }: DataTableProps) => {
  const apiRef = useGridApiRef();
  const [width] = useWindowDimension();

  const actions = showActions ? [Actions(apiRef)] : [];

  useEffect(() => {
    apiRef.current.autosizeColumns({ expand: true });
  }, [apiRef, columns, rows, width]);

  return (
    <DataGrid
      apiRef={apiRef}
      columns={[...columns, ...actions]}
      rows={rows}
      autoPageSize
      editMode="row"
      sx={{
        mx: -1,
        '&, [class^=MuiDataGrid]': { border: 'none' },
        '& .MuiDataGrid-columnHeader': {
          color: '#000'
        },
        '& .MuiDataGrid-cell:focus-within': {
          outline: 'none !important'
        },
        '& input': {
          padding: '0 8px !important'
        }
      }}
      {...rest}
    />
  );
};

export default DataTable;

const Actions = (apiRef: ReturnType<typeof useGridApiRef>): GridColDef => {
  return {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    cellClassName: 'actions',
    getActions: ({ id }) => {
      const { getRowMode, startRowEditMode, stopRowEditMode } = apiRef.current;
      const isInEditMode = getRowMode(id) === GridRowModes.Edit;

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            icon={<Save />}
            label="Save"
            sx={{
              color: 'primary.main'
            }}
            onClick={() => stopRowEditMode({ id })}
          />,
          <GridActionsCellItem
            icon={<Cancel />}
            label="Cancel"
            className="textPrimary"
            onClick={() => stopRowEditMode({ id, ignoreModifications: true })}
            color="inherit"
          />
        ];
      }

      return [
        <GridActionsCellItem
          icon={<Edit />}
          label="Edit"
          className="textPrimary"
          onClick={() => startRowEditMode({ id })}
          color="inherit"
        />,
        <GridActionsCellItem icon={<Delete />} label="Delete" onClick={console.log} color="inherit" />
      ];
    }
  };
};
