import { Link } from 'react-router-dom';

// material-ui
import { Box, Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

// project imports
import DataTable from '@/ui-component/DataTable';
import { useContacts } from '../hooks/useContactsQueries';
import { useDeleteContact, useUpdateContact } from '../hooks/useContactsMutations';
import { fetchContacts } from '../api/contactsApi';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| CONTACTS PAGE ||============================== //

const columns: GridColDef<Awaited<ReturnType<typeof fetchContacts>>[number]>[] = [
  { field: 'firstName', headerName: 'Förnamn', editable: true },
  { field: 'lastName', headerName: 'Efternamn', editable: true },
  { field: 'companyName', headerName: 'Bolag' },
  { field: 'email', headerName: 'Email', editable: true },
  { field: 'phone', headerName: 'Telefonnummer', editable: true },
  { field: 'updatedAt', headerName: 'Senast uppdaterad', headerAlign: 'right', align: 'right' }
];

const ContactsPage = () => {
  const { data = [], isLoading } = useContacts();
  const { mutate: updateContact } = useUpdateContact();
  const { mutate: deleteContact } = useDeleteContact();

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
        processRowUpdate={(row) => {
          updateContact(row);
          return row;
        }}
        processRowDelete={(id) => {
          deleteContact(Number(id));
        }}
        showActions
      />
    </Box>
  );
};

export default ContactsPage;
