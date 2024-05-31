import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { Grid, TextField, Button, Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party
import { useForm } from 'react-hook-form';

// project imports
import { Company } from '../api/companiesApi';
import { useCreateCompany } from '../hooks/useCompaniesMutations';

// ==============================|| NEW COMPANY PAGE ||============================== //

const NewCompany = () => {
  const { mutate: createCompany } = useCreateCompany();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Partial<Company>>();

  const onSubmit = (data: Partial<Company>) => {
    createCompany(data, {
      onSuccess: () => {
        navigate('..');
      }
    });
  };

  return (
    <>
      <Typography variant="h4" color="primary">
        Lägg till företag
      </Typography>
      <Box sx={{ my: 1 }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Bolagsnamn" type="text" margin="none" {...register('companyName')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Address" type="text" margin="none" {...register('address')} />
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

export default NewCompany;
