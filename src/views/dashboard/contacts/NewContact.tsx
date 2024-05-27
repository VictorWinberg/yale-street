// material-ui
import { Grid, TextField, Button, Box, Autocomplete } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party
import { Formik } from 'formik';

// project imports

// ==============================|| NEW CONTACT PAGE ||============================== //

const NewContact = () => {
  return (
    <>
      <Typography variant="h4" color="primary">
        Lägg till kontakt
      </Typography>
      <Box sx={{ my: 1 }} />
      <Formik initialValues={{}} onSubmit={console.log}>
        {({ handleSubmit, isSubmitting }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Förnamn" name="name" type="text" margin="none" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Efternamn" name="employer" type="text" margin="none" />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  options={DummyCompanies}
                  // MUI "key" prop bug: https://github.com/mui/material-ui/pull/42241
                  renderInput={(params) => <TextField {...params} label="Bolag" name="companies" type="text" />}
                  limitTags={2}
                  disableCloseOnSelect
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Befattning" name="fee" type="text" margin="none" />
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

            <Box sx={{ mt: 3 }}>
              <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                Spara
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

const DummyCompanies = [
  { label: 'Företaget' },
  { label: 'BRF Sjöstadshöjden' },
  { label: 'Bil & Bostad AB' },
  { label: 'Bostadsrättsföreningen' }
];

const DummyDispatches = [{ label: 'Utskick Syd' }, { label: 'Utskick Väst' }, { label: 'Utskick Norr' }, { label: 'Utskick Öst' }];

export default NewContact;
