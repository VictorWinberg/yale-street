import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { Box, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party

// project imports
import ContentTabs from '@/ui-component/ContentTabs';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { Contact } from '../api/contactsApi';
import { useCreateContact } from '../hooks/useContactsMutations';
import ContactForm from './ContactForm';

// ==============================|| NEW CONTACT PAGE ||============================== //

const NewContact = () => {
  const { mutate: createContact } = useCreateContact();
  const navigate = useNavigate();

  const handleSubmit = (data: Partial<Contact>) => {
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
      <ContactForm onSubmit={handleSubmit}>
        <Box sx={{ my: 1 }} />

        <FlexGrow>
          <ContentTabs
            tabs={[
              { label: 'Interaktioner', content: <>Interaktioner...</> },
              { label: 'Söker', content: <>Söker...</> }
            ]}
          />
        </FlexGrow>

        <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
          <Button size="large" type="submit" variant="contained" color="primary">
            Spara
          </Button>
          <Button component={Link} size="large" variant="outlined" color="primary" to="..">
            Avbryt
          </Button>
        </Stack>
      </ContactForm>
    </>
  );
};

export default NewContact;
