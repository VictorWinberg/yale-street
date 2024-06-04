import { Link } from 'react-router-dom';

// material-ui
import { Box, Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

// project imports
import DataTable from '@/ui-component/DataTable';
import { useCompanies } from '../hooks/useCompaniesQueries';
import { useDeleteCompany, useUpdateCompany } from '../hooks/useCompaniesMutations';
import { fetchCompanies } from '../api/companiesApi';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| COMPANIES PAGE ||============================== //

const columns: GridColDef<Awaited<ReturnType<typeof fetchCompanies>>[number]>[] = [
  { field: 'companyName', headerName: 'Bolagsnamn', editable: true },
  { field: 'address', headerName: 'Address', editable: true },
  { field: 'industry', headerName: 'Industri', editable: true },
  { field: 'website', headerName: 'Website', editable: true },
  { field: 'updatedAt', headerName: 'Senast uppdaterad', headerAlign: 'right', align: 'right' }
];

const CompaniesPage = () => {
  const { data = [], isLoading } = useCompanies();
  const { mutate: updateCompany } = useUpdateCompany();
  const { mutate: deleteCompany } = useDeleteCompany();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Box>
        <Button
          component={Link}
          to="new"
          variant="outlined"
          size="small"
          startIcon={<Add />}
          sx={{ textTransform: 'none' }}
        >
          Lägg till bolag
        </Button>
      </Box>
      <DataTable
        rows={data}
        columns={columns}
        getRowId={(row) => row.companyId}
        loading={isLoading}
        autosizeOnMount
        autosizeOptions={{ expand: true }}
        processRowUpdate={(row) => {
          updateCompany(row);
          return row;
        }}
        processRowDelete={(id) => {
          deleteCompany(Number(id));
        }}
        showActions
      />
    </Box>
  );
};

export default CompaniesPage;
