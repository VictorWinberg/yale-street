import { useEffect } from 'react';

// material-ui
import {
  DataGrid,
  DataGridProps,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridRowModel,
  GridRowModes,
  useGridApiRef
} from '@mui/x-data-grid';

// project imports
import useWindowDimension from '@/hooks/useWindowDimension';

// assets
import { Cancel, Delete, Edit, Save } from '@mui/icons-material';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import { Button, Card, CardActions, CardContent, Popover, Typography } from '@mui/material';

// ==============================|| DATA TABLE ||============================== //

interface DataTableProps extends DataGridProps {
  rows: GridRowModel[];
  showActions?: boolean;
  processRowDelete?: (id: GridRowId) => void;
}

const DataTable = ({ columns, rows, showActions, ...rest }: DataTableProps) => {
  const apiRef = useGridApiRef();
  const [width] = useWindowDimension();

  const actions = showActions ? [Actions(apiRef, rest)] : [];

  useEffect(() => {
    apiRef.current.autosizeColumns({ expand: true });
  }, [apiRef, columns, rows, width]);

  return (
    <DataGrid
      apiRef={apiRef}
      columns={[...columns, ...actions]}
      rows={rows}
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
      onProcessRowUpdateError={console.error}
      {...rest}
    />
  );
};

export default DataTable;

const Actions = (
  apiRef: ReturnType<typeof useGridApiRef>,
  params: {
    processRowDelete?: (id: GridRowId) => void;
  }
): GridColDef => {
  return {
    field: 'actions',
    type: 'actions',
    minWidth: 100,
    getActions: ({ id }) => {
      const { getRowMode, startRowEditMode, stopRowEditMode } = apiRef.current;
      const { processRowDelete } = params;
      const isInEditMode = getRowMode(id) === GridRowModes.Edit;

      const handleSaveClick = () => {
        stopRowEditMode({ id });
      };

      const handleDeleteClick = () => {
        processRowDelete?.(id);
      };

      const handleEditClick = () => {
        startRowEditMode({ id });
      };

      const handleCancelClick = () => {
        stopRowEditMode({ id, ignoreModifications: true });
      };

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            icon={<Save />}
            label="Save"
            sx={{
              color: 'primary.main'
            }}
            onClick={handleSaveClick}
          />,
          <GridActionsCellItem
            icon={<Cancel />}
            label="Cancel"
            className="textPrimary"
            onClick={handleCancelClick}
            color="inherit"
          />
        ];
      }

      return [
        <GridActionsCellItem
          icon={<Edit />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick}
          color="inherit"
        />,
        <PopupState variant="popover" popupId={`delete-popup-${id}`}>
          {(popupState) => (
            <>
              <GridActionsCellItem icon={<Delete />} label="Delete" {...bindTrigger(popupState)} color="inherit" />
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
              >
                <Card>
                  <CardContent>
                    <Typography variant="body1">Är du säker på att du vill ta bort denna rad?</Typography>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth onClick={popupState.close} color="inherit" variant="outlined">
                      Avbryt
                    </Button>
                    <Button
                      fullWidth
                      onClick={() => [handleDeleteClick(), popupState.close()]}
                      color="error"
                      variant="contained"
                    >
                      Ta bort
                    </Button>
                  </CardActions>
                </Card>
              </Popover>
            </>
          )}
        </PopupState>
      ];
    }
  };
};
