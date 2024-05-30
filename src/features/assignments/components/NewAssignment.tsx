// material-ui
import { Grid, TextField, Button, Box, Autocomplete } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party
import { useForm } from 'react-hook-form';

// project imports
import { useCreateAssignment } from '../hooks/useAssignmentsMutations';
import { Assignment } from '../api/assignmentsApi';

// ==============================|| NEW ASSIGNMENT PAGE ||============================== //

const NewAssignment = () => {
  const { mutate: createAssignment } = useCreateAssignment();
  const { register, handleSubmit } = useForm<Partial<Assignment>>();

  return (
    <>
      <Typography variant="h4" color="primary">
        Lägg till uppdrag
      </Typography>
      <Box sx={{ my: 1 }} />
      <form onSubmit={handleSubmit((data) => createAssignment(data))}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Uppdragsnamn" type="text" margin="none" {...register('assignmentName')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Uppdragsgivare" type="text" margin="none" {...register('contactId')} />
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
            <TextField fullWidth label="Arvode" margin="none" type="text" {...register('fee')} />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Button
            disableElevation
            // disabled={isSubmitting}
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
