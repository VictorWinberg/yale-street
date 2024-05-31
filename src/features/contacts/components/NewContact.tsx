import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { Grid, TextField, Button, Box, Autocomplete, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party
import { Controller, useForm } from 'react-hook-form';

// project imports
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { Contact } from '../api/contactsApi';
import { useCreateContact } from '../hooks/useContactsMutations';

// ==============================|| NEW CONTACT PAGE ||============================== //

const NewContact = () => {
  const { data: companies = [] } = useCompanies();
  const { mutate: createContact } = useCreateContact();
  const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm<Partial<Contact>>();

  const onSubmit = (data: Partial<Contact>) => {
    createContact(data, {
      onSuccess: () => {
        navigate('..');
      }
    });
  };

  return (
    <>
      <Typography variant="h4" color="primary">
        Lägg till kontakt
      </Typography>
      <Box sx={{ my: 1 }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Förnamn" type="text" margin="none" {...register('firstName')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Efternamn" type="text" margin="none" {...register('lastName')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" type="text" margin="none" {...register('email')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Telefonnummer" type="text" margin="none" {...register('phone')} />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="companyId"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={companies}
                  getOptionKey={(option) => option.companyId}
                  getOptionLabel={(option) => option.companyName}
                  onChange={(_, value) => field.onChange(value ? value.companyId : undefined)}
                  renderInput={(params) => <TextField {...params} label="Bolag" variant="outlined" fullWidth />}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              multiple
              options={DummyDispatches}
              // MUI "key" prop bug: https://github.com/mui/material-ui/pull/42241
              renderInput={(params) => <TextField {...params} label="Utskick" name="dispatch" type="text" />}
              limitTags={2}
              disableCloseOnSelect
            />
          </Grid>
        </Grid>

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

const DummyDispatches = [
  { label: 'Utskick Syd' },
  { label: 'Utskick Väst' },
  { label: 'Utskick Norr' },
  { label: 'Utskick Öst' }
];

export default NewContact;
