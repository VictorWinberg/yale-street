// material-ui
import { Grid, TextField, Button, Box, Autocomplete } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party
import { Formik } from 'formik';

// project imports

// ==============================|| NEW SEEKING PAGE ||============================== //

const NewSeeking = () => {
  return (
    <>
      <Typography variant="h4" color="primary">
        Lägg till intresseanmälan
      </Typography>
      <Box sx={{ my: 1 }} />
      <Formik initialValues={{}} onSubmit={console.log}>
        {({ handleSubmit, isSubmitting }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Kontakt" name="contact" type="text" margin="none" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Bolag" name="company" type="text" margin="none" />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  options={DummySegments}
                  // MUI "key" prop bug: https://github.com/mui/material-ui/pull/42241
                  renderInput={(params) => <TextField {...params} label="Segment" name="segment" type="text" />}
                  limitTags={2}
                  disableCloseOnSelect
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Geografi" name="geography" type="text" margin="none" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Kommentar/Anteckningar"
                  name="comment"
                  type="text"
                  multiline
                  rows={4}
                  margin="none"
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

const DummySegments = [
  { label: 'IT' },
  { label: 'Real Estate' },
  { label: 'Finance' },
  { label: 'Healthcare' },
  { label: 'Retail' },
  { label: 'E-commerce' }
];

export default NewSeeking;
