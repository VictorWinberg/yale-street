import { useEffect } from 'react';

// material-ui
import { Autocomplete, Box, BoxProps, Grid, TextField } from '@mui/material';

// third party
import { Controller, UseFormProps, useForm } from 'react-hook-form';

// project imports
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import { sxFlex } from '@/ui-component/extended/FlexGrow';
import { Assignment } from '../api/assignmentsApi';

// ==============================|| ASSIGNMENT FORM ||============================== //

interface AssignmentFormProps extends Omit<BoxProps, 'onChange' | 'onSubmit'> {
  onSubmit?: (data: Partial<Assignment>) => void;
  onChange?: (data: Partial<Assignment>) => void;
  formProps?: UseFormProps<Partial<Assignment>>;
}

const AssignmentForm = ({ onSubmit = () => {}, onChange, formProps, children, ...rest }: AssignmentFormProps) => {
  const { data: contacts = [] } = useContacts();
  const { register, control, handleSubmit, watch } = useForm<Partial<Assignment>>(formProps);

  const watchedFields = watch();
  useEffect(() => {
    onChange?.(watchedFields);
  }, [onChange, watchedFields]);

  return (
    <Box {...rest}>
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
                  getOptionLabel={(option) => option.contactName}
                  value={contacts.find((contact) => contact.contactId === field.value) || null}
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
              options={[]}
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

        {children}
      </form>
    </Box>
  );
};

export default AssignmentForm;
