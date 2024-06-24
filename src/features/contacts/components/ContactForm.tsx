import { useEffect } from 'react';

// material-ui
import { Autocomplete, Box, BoxProps, Grid, TextField } from '@mui/material';

// third party
import { Controller, UseFormProps, useForm } from 'react-hook-form';

// project imports
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { Contact } from '../api/contactsApi';

// ==============================|| CONTACT FORM ||============================== //

interface ContactFormProps extends Omit<BoxProps, 'onChange' | 'onSubmit'> {
  onSubmit?: (data: Partial<Contact>) => void;
  onChange?: (data: Partial<Contact>) => void;
  formProps?: UseFormProps<Partial<Contact>>;
}

const ContactForm = ({ onSubmit = () => {}, onChange, formProps, children, ...rest }: ContactFormProps) => {
  const { data: companies = [] } = useCompanies();
  const { register, control, handleSubmit, watch } = useForm<Partial<Contact>>(formProps);

  const watchedFields = watch();
  useEffect(() => {
    onChange?.(watchedFields);
  }, [onChange, watchedFields]);

  console.log(formProps, companies);

  return (
    <Box {...rest}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Namn" type="text" margin="none" {...register('contactName')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" type="text" margin="none" {...register('email')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Telefonnummer" type="text" margin="none" {...register('phone')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="companyId"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={companies}
                  getOptionKey={(option) => option.companyId}
                  getOptionLabel={(option) => option.companyName}
                  value={companies.find((company) => company.companyId === field.value) || null}
                  onChange={(_, value) => field.onChange(value ? value.companyId : undefined)}
                  renderInput={(params) => <TextField {...params} label="Bolag" variant="outlined" fullWidth />}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Befattning" type="text" margin="none" {...register('jobTitle')} />
          </Grid>
          <Grid item xs={12} sm={6}>
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

        {children}
      </form>
    </Box>
  );
};

const DummyDispatches = [
  { label: 'Utskick Syd' },
  { label: 'Utskick Väst' },
  { label: 'Utskick Norr' },
  { label: 'Utskick Öst' }
];

export default ContactForm;
