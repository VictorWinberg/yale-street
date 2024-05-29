import { Link } from 'react-router-dom';

// material-ui
import { Box, Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

// project imports
import DataTable from '@/ui-component/DataTable';
import useAssignments from '@/hooks/useAssignments';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| ASSIGNMENTS PAGE ||============================== //

type DataType = ReturnType<typeof useAssignments>['data'][number];
const columns: GridColDef<DataType>[] = [
  { field: 'assignmentName', headerName: 'Uppdragsnamn', editable: true },
  { field: 'companyName', headerName: 'Bolag', editable: true },
  { field: 'email', headerName: 'Email', editable: true },
  {
    field: 'responsible',
    headerName: 'Ansvarig',
    sortable: false,
    valueGetter: (_value, row) => `${row.assignmentName || ''}`
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    editable: true
  },
  {
    field: 'fee',
    headerName: 'Arvode',
    type: 'number',
    editable: true,
    renderCell: ({ value }) =>
      Number(value).toLocaleString('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
  }
];

const Assignments = () => {
  const { data, isLoading } = useAssignments();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Box>
        <Button
          component={Link}
          to="new"
          variant="outlined"
          size="small"
          startIcon={<Add />}
          sx={{ textTransform: 'none' }}
        >
          Lägg till uppdrag
        </Button>
      </Box>
      <DataTable
        rows={data}
        columns={columns}
        getRowId={(row) => row.assignmentId}
        loading={isLoading}
        onRowClick={console.log}
        showActions
      />
    </Box>
  );
};

export default Assignments;
