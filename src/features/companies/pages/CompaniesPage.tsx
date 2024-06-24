import { Link } from 'react-router-dom';

// material-ui
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { MRT_ColumnDef, MRT_EditActionButtons } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { fetchCompanies } from '../api/companiesApi';
import CompanyForm from '../components/CompanyForm';
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
  { accessorKey: 'updatedAt', header: 'Senast uppdaterad', enableEditing: false }
];

const CompaniesPage = () => {
  const { data = [], isLoading } = useCompanies();
  const { mutate: createCompany } = useCreateCompany();
  const { mutate: updateCompany } = useUpdateCompany();
  const { mutate: deleteCompany } = useDeleteCompany();

  return (
    <FlexGrow>
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
        renderEditRowDialogContent={({ row, table }) => (
          <>
            <DialogTitle variant="h4" color="primary">
              Redigera bolag
            </DialogTitle>
            <DialogContent>
              <CompanyForm
                sx={{ mt: 1 }}
                formProps={{ values: row.original }}
                onChange={(values) => {
                  //@ts-expect-error any
                  row._valuesCache = values;
                }}
              />
            </DialogContent>
            <DialogActions>
              <MRT_EditActionButtons row={row} table={table} variant="text" />
            </DialogActions>
          </>
        )}
      />
    </FlexGrow>
  );
};

export default CompaniesPage;
