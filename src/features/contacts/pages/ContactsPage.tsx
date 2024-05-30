import { Link } from 'react-router-dom';

// material-ui
import { Box, Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

// project imports
import DataTable from '@/ui-component/DataTable';
import { useContacts } from '../hooks/useContactsQueries';
import { fetchContacts } from '../api/contactsApi';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| CONTACTS PAGE ||============================== //

const columns: GridColDef<Awaited<ReturnType<typeof fetchContacts>>[number]>[] = [
  {
    field: 'name',
    headerName: 'Namn',
    valueGetter: (_value, row) => `${row.firstName || ''} ${row.lastName || ''}`.trim()
  },
  { field: 'companyName', headerName: 'Bolag', editable: true },
  { field: 'email', headerName: 'Email', editable: true },
  { field: 'phone', headerName: 'Telefonnummer', editable: true },
  { field: 'updatedAt', headerName: 'Senast uppdaterad', headerAlign: 'right', align: 'right' }
];

const ContactsPage = () => {
  const { data = [], isLoading } = useContacts();

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
          Lägg till kontakt
        </Button>
      </Box>
      <DataTable
        rows={data}
        columns={columns}
        getRowId={(row) => row.contactId}
        loading={isLoading}
        autosizeOnMount
        autosizeOptions={{ expand: true }}
        onRowClick={console.log}
        showActions
      />
    </Box>
  );
};

export default ContactsPage;
