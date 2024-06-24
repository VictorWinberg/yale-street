import { useEffect } from 'react';

// material-ui
import { Box, BoxProps, Grid, TextField } from '@mui/material';

// third party
import { UseFormProps, useForm } from 'react-hook-form';

// project imports
import { Company } from '../api/companiesApi';

// ==============================|| COMPANY FORM ||============================== //
interface CompanyFormProps extends Omit<BoxProps, 'onChange' | 'onSubmit'> {
  onSubmit?: (data: Partial<Company>) => void;
  onChange?: (data: Partial<Company>) => void;
  formProps?: UseFormProps<Partial<Company>>;
}

const CompanyForm = ({ onSubmit = () => {}, onChange, formProps, children, ...rest }: CompanyFormProps) => {
  const { register, handleSubmit, watch } = useForm<Partial<Company>>(formProps);

  const watchedFields = watch();
  useEffect(() => {
    onChange?.(watchedFields);
  }, [onChange, watchedFields]);

  return (
    <Box {...rest}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Bolagsnamn" type="text" margin="none" {...register('companyName')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Address" type="text" margin="none" {...register('address')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Industri" type="text" margin="none" {...register('industry')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Website" type="text" margin="none" {...register('website')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Telefon" type="text" margin="none" {...register('phone')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" type="text" margin="none" {...register('email')} />
          </Grid>
        </Grid>

        {children}
      </form>
    </Box>
  );
};

export default CompanyForm;
