import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { Autocomplete, Box, Button, Grid, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party
import { Controller, useForm } from 'react-hook-form';

// project imports
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import ContentTabs from '@/ui-component/ContentTabs';
import DataTable from '@/ui-component/DataTable';
import FlexGrow, { sxFlex } from '@/ui-component/extended/FlexGrow';
import { Assignment } from '../api/assignmentsApi';
import { useCreateAssignment } from '../hooks/useAssignmentsMutations';

// ==============================|| NEW ASSIGNMENT PAGE ||============================== //

const NewAssignment = () => {
  const { data: contacts = [], isLoading: contactsIsLoading } = useContacts();
  const { mutate: createAssignment } = useCreateAssignment();
  const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm<Partial<Assignment>>();

  const onSubmit = (data: Partial<Assignment>) => {
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
      <form onSubmit={handleSubmit(onSubmit)} style={{ ...sxFlex }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Uppdragsnamn" type="text" margin="none" {...register('assignmentName')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="responsiblePersonId"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={contacts}
                  getOptionKey={(option) => option.contactId}
                  getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
                  onChange={(_, value) => field.onChange(value ? value.contactId : undefined)}
                  renderInput={(params) => (
                    <TextField {...params} label="Uppdragsgivare" variant="outlined" fullWidth />
                  )}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              multiple
              options={DummyProperties}
              // MUI "key" prop bug: https://github.com/mui/material-ui/pull/42241
              renderInput={(params) => (
                <TextField {...params} label="Fastigheter" type="text" {...register('relevantFiles')} />
              )}
              limitTags={2}
              disableCloseOnSelect
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Status" margin="none" type="text" {...register('status')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Typ" margin="none" type="text" {...register('type')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Arvode" margin="none" type="number" {...register('fee')} />
          </Grid>
        </Grid>

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
      </form>
    </>
  );
};

const DummyProperties = [
  { label: 'Företaget' },
  { label: 'BRF Sjöstadshöjden' },
  { label: 'Bil & Bostad AB' },
  { label: 'Hemfosa Fastigheter AB' },
  { label: 'Svenska Bostäder' },
  { label: 'Wallenstam AB' },
  { label: 'Skanska' },
  { label: 'JM AB' }
];

export default NewAssignment;
