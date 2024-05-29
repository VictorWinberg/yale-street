import { Link } from 'react-router-dom';

// material-ui
import { Box, Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

// project imports
import DataTable from '@/ui-component/DataTable';
import useContacts from '@/hooks/useContacts';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| CONTACTS PAGE ||============================== //

type DataType = ReturnType<typeof useContacts>['data'][number];
const columns: GridColDef<DataType>[] = [
  { field: 'name', headerName: 'Namn', valueGetter: (_value, row) => `${row.firstName || ''} ${row.lastName || ''}`.trim() },
  { field: 'companyName', headerName: 'Bolag' },
  { field: 'email', headerName: 'Email' },
  { field: 'phone', headerName: 'Telefonnummer' },
  { field: 'updatedAt', headerName: 'Senast uppdaterad', headerAlign: 'right', align: 'right' }
];

const Contacts = () => {
  const { data, isLoading } = useContacts();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Box>
        <Button component={Link} to="new" variant="outlined" size="small" startIcon={<Add />} sx={{ textTransform: 'none' }}>
          Lägg till kontakt
        </Button>
      </Box>
      <DataTable rows={data} columns={columns} getRowId={(row) => row.contactId} loading={isLoading} onRowClick={console.log} />
    </Box>
  );
};

export default Contacts;
