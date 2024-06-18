import { Link } from 'react-router-dom';

// material-ui
import { Button } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { fetchContacts } from '../api/contactsApi';
import { useCreateContact, useDeleteContact, useUpdateContact } from '../hooks/useContactsMutations';
import { useContacts } from '../hooks/useContactsQueries';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| CONTACTS PAGE ||============================== //

type DataType = Awaited<ReturnType<typeof fetchContacts>>[number];
const columns: MRT_ColumnDef<DataType>[] = [
  { accessorKey: 'firstName', header: 'Förnamn' },
  { accessorKey: 'lastName', header: 'Efternamn' },
  { accessorKey: 'companyName', header: 'Bolag' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'phone', header: 'Telefonnummer' },
  { accessorKey: 'updatedAt', header: 'Senast uppdaterad' }
];

const ContactsPage = () => {
  const { data = [], isLoading } = useContacts();
  const { mutate: createContact } = useCreateContact();
  const { mutate: updateContact } = useUpdateContact();
  const { mutate: deleteContact } = useDeleteContact();

  return (
    <FlexGrow>
      <DataTable<DataType>
        data={data}
        columns={columns}
        getRowId={(row) => `${row.contactId}`}
        state={{ isLoading }}
        onCreate={(row) => createContact(row)}
        onUpdate={(row) => updateContact(row)}
        onDelete={(row) => deleteContact(row)}
        renderTopToolbarCustomActions={() => (
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
        )}
      />
    </FlexGrow>
  );
};

export default ContactsPage;
