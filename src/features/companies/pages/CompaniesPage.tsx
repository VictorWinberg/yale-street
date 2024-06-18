import { Link } from 'react-router-dom';

// material-ui
import { Box, Button } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import { fetchCompanies } from '../api/companiesApi';
import { useCreateCompany, useDeleteCompany, useUpdateCompany } from '../hooks/useCompaniesMutations';
import { useCompanies } from '../hooks/useCompaniesQueries';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| COMPANIES PAGE ||============================== //

type DataType = Awaited<ReturnType<typeof fetchCompanies>>[number];
const columns: MRT_ColumnDef<DataType>[] = [
  { accessorKey: 'companyName', header: 'Bolagsnamn' },
  { accessorKey: 'address', header: 'Address' },
  { accessorKey: 'industry', header: 'Industri' },
  { accessorKey: 'website', header: 'Website' },
  { accessorKey: 'updatedAt', header: 'Senast uppdaterad' }
];

const CompaniesPage = () => {
  const { data = [], isLoading } = useCompanies();
  const { mutate: createCompany } = useCreateCompany();
  const { mutate: updateCompany } = useUpdateCompany();
  const { mutate: deleteCompany } = useDeleteCompany();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <DataTable<DataType>
        data={data}
        columns={columns}
        getRowId={(row) => `${row.companyId}`}
        state={{ isLoading }}
        onCreate={(row) => createCompany(row)}
        onUpdate={(row) => updateCompany(row)}
        onDelete={(row) => deleteCompany(row)}
        renderTopToolbarCustomActions={() => (
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
        )}
      />
    </Box>
  );
};

export default CompaniesPage;
