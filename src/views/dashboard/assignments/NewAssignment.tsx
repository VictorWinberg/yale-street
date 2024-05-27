// material-ui
import { Grid, TextField, Button, Box, Autocomplete } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party
import { Formik } from 'formik';

// project imports

// ==============================|| NEW ASSIGNMENT PAGE ||============================== //

const NewAssignment = () => {
  return (
    <>
      <Typography variant="h4" color="primary">
        Lägg till uppdrag
      </Typography>
      <Box sx={{ my: 1 }} />
      <Formik initialValues={{}} onSubmit={console.log}>
        {({ handleSubmit, isSubmitting }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Uppdragsnamn" name="name" type="text" margin="none" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Uppdragsgivare" name="employer" type="text" margin="none" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  multiple
                  options={DummyProperties}
                  // MUI "key" prop bug: https://github.com/mui/material-ui/pull/42241
                  renderInput={(params) => <TextField {...params} label="Fastigheter" name="properties" type="text" />}
                  limitTags={2}
                  disableCloseOnSelect
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Projektledare" margin="none" name="fee" type="text" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Arvode" margin="none" name="fee" type="text" />
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
