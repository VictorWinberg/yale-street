import { Link } from 'react-router-dom';

// material-ui
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { MRT_ColumnDef, MRT_EditActionButtons } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { fetchContacts } from '../api/contactsApi';
import ContactForm from '../components/ContactForm';
import { useCreateContact, useDeleteContact, useUpdateContact } from '../hooks/useContactsMutations';
import { useContacts } from '../hooks/useContactsQueries';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| CONTACTS PAGE ||============================== //

type DataType = Awaited<ReturnType<typeof fetchContacts>>[number];
const columns: MRT_ColumnDef<DataType>[] = [
  { accessorKey: 'contactName', header: 'Namn' },
  { accessorKey: 'jobTitle', header: 'Befattning' },
  { accessorKey: 'companyName', header: 'Bolag', enableEditing: false },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'phone', header: 'Telefonnummer' },
  { accessorKey: 'updatedAt', header: 'Senast uppdaterad', enableEditing: false }
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
        renderEditRowDialogContent={({ row, table }) => (
          <>
            <DialogTitle variant="h4" color="primary">
              Redigera kontakt
            </DialogTitle>
            <DialogContent>
              <ContactForm
                sx={{ mt: 1 }}
                formProps={{ values: row.original }}
                onChange={(values) => {
                  //@ts-expect-error any
                  row._valuesCache = values;
                }}
              />
            </DialogContent>
            <DialogActions>
              <MRT_EditActionButtons row={row} table={table} variant="text" />
            </DialogActions>
          </>
        )}
      />
    </FlexGrow>
  );
};

export default ContactsPage;
