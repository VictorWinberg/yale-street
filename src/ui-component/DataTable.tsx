import { useEffect } from 'react';

// material-ui
import { DataGrid, DataGridProps, GridRowModel, useGridApiRef } from '@mui/x-data-grid';

// project imports
import useWindowDimension from '@/hooks/useWindowDimension';

// ==============================|| DATA TABLE ||============================== //

interface DataTableProps extends DataGridProps {
  rows: GridRowModel[];
}

const DataTable = ({ columns, rows, ...rest }: DataTableProps) => {
  const apiRef = useGridApiRef();

  const [width] = useWindowDimension();

  useEffect(() => {
    apiRef.current.autosizeColumns({ expand: true });
  }, [apiRef, columns, rows, width]);

  return (
    <DataGrid
      apiRef={apiRef}
      columns={columns}
      rows={rows}
      autosizeOnMount
      autosizeOptions={{ expand: true }}
      autoPageSize
      sx={{
        mx: -1,
        '&, [class^=MuiDataGrid]': { border: 'none' },
        '& .MuiDataGrid-columnHeader': {
          color: '#000'
        },
        '& .MuiDataGrid-cell:focus-within': {
          outline: 'none !important'
        }
      }}
      {...rest}
    />
  );
};

export default DataTable;
