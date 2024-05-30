// material-ui
import { Grid, TextField, Button, Box, Autocomplete } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party
import { Formik } from 'formik';

// project imports

// ==============================|| NEW COMPANY PAGE ||============================== //

const NewCompany = () => {
  return (
    <>
      <Typography variant="h4" color="primary">
        Lägg till företag
      </Typography>
      <Box sx={{ my: 1 }} />
      <Formik initialValues={{}} onSubmit={console.log}>
        {({ handleSubmit, isSubmitting }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField fullWidth label="Bolagsnamn" name="name" type="text" margin="none" />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  options={DummyOrganisations}
                  // MUI "key" prop bug: https://github.com/mui/material-ui/pull/42241
                  renderInput={(params) => (
                    <TextField {...params} label="Organisationsnummer" name="orgnr" type="text" />
                  )}
                  limitTags={2}
                  disableCloseOnSelect
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 3 }}>
              <Button
                disableElevation
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                Spara
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

const DummyOrganisations = [{ label: '556036-0793' }, { label: '556036-0794' }, { label: '556036-0795' }];

export default NewCompany;
