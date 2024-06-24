import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { Box, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party

// project imports
import ContentTabs from '@/ui-component/ContentTabs';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { Company } from '../api/companiesApi';
import { useCreateCompany } from '../hooks/useCompaniesMutations';
import CompanyForm from './CompanyForm';

// ==============================|| NEW COMPANY PAGE ||============================== //

const NewCompany = () => {
  const { mutate: createCompany } = useCreateCompany();
  const navigate = useNavigate();

  const handleSubmit = (data: Partial<Company>) => {
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
      <CompanyForm onSubmit={handleSubmit}>
        <Box sx={{ my: 1 }} />

        <FlexGrow>
          <ContentTabs
            tabs={[
              { label: 'Interaktioner', content: <>Interaktioner...</> },
              { label: 'Kontakter', content: <>Kontakter...</> },
              { label: 'Söker', content: <>Söker...</> },
              { label: 'Uppdrag', content: <>Uppdrag...</> },
              { label: 'KYC', content: <>KYC...</> }
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
      </CompanyForm>
    </>
  );
};

export default NewCompany;
