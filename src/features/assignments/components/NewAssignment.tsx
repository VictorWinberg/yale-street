import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { Box, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party

// project imports
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { Assignment } from '../api/assignmentsApi';
import { useCreateAssignment } from '../hooks/useAssignmentsMutations';
import AssignmentForm from './AssignmentForm';

// ==============================|| NEW ASSIGNMENT PAGE ||============================== //

const NewAssignment = () => {
  const { data: contacts = [], isLoading: contactsIsLoading } = useContacts();
  const { mutate: createAssignment } = useCreateAssignment();
  const navigate = useNavigate();

  const handleSubmit = (data: Partial<Assignment>) => {
    createAssignment(data, {
      onSuccess: () => {
        navigate('..');
      }
    });
  };

  return (
    <>
      <Typography variant="h4" color="primary">
        Lägg till uppdrag
      </Typography>
      <Box sx={{ my: 1 }} />
      <AssignmentForm onSubmit={handleSubmit}>
        <Box sx={{ my: 1 }} />

        <FlexGrow>
          <ContentTabs
            tabs={[
              { label: 'Interaktioner', content: <>Interaktioner...</> },
              { label: 'Dokument', content: <>Dokument...</> },
              {
                label: 'Intressenter',
                content: (
                  <DataTable
                    data={contacts}
                    getRowId={(row) => `${row.contactId}`}
                    state={{ isLoading: contactsIsLoading }}
                    columns={[
                      { accessorKey: 'firstName', header: 'Förnamn' },
                      { accessorKey: 'lastName', header: 'Efternamn' },
                      { accessorKey: 'companyName', header: 'Bolag' }
                    ]}
                  />
                )
              },
              { label: 'Moduler', content: <>Moduler...</> }
            ]}
            selected={2}
          />
        </FlexGrow>
        <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
          <Button size="large" type="submit" variant="contained" color="primary">
            Spara
          </Button>
          <Button component={Link} size="large" variant="outlined" color="primary" to="..">
            Avbryt
          </Button>
        </Stack>
      </AssignmentForm>
    </>
  );
};

export default NewAssignment;
