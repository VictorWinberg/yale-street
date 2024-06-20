import { Link } from 'react-router-dom';

// material-ui
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { MRT_ColumnDef, MRT_EditActionButtons } from 'material-react-table';

// project imports
import DataTable from '@/ui-component/DataTable';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { fetchAssignments } from '../api/assignmentsApi';
import AssignmentForm from '../components/AssignmentForm';
import { useCreateAssignment, useDeleteAssignment, useUpdateAssignment } from '../hooks/useAssignmentsMutations';
import { useAssignments } from '../hooks/useAssignmentsQueries';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| ASSIGNMENTS PAGE ||============================== //

type DataType = Awaited<ReturnType<typeof fetchAssignments>>[number];
const columns: MRT_ColumnDef<DataType>[] = [
  { accessorKey: 'assignmentName', header: 'Uppdragsnamn' },
  { accessorKey: 'responsibleCompanyName', header: 'Bolag' },
  { accessorKey: 'responsiblePersonEmail', header: 'Email' },
  {
    accessorKey: 'responsiblePersonName',
    header: 'Ansvarig'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'fee',
    header: 'Arvode',
    Cell: ({ cell }) =>
      cell.getValue<number>().toLocaleString('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
  }
];

const AssignmentsPage = () => {
  const { data = [], isLoading } = useAssignments();
  const { mutate: createAssignment } = useCreateAssignment();
  const { mutate: updateAssignment } = useUpdateAssignment();
  const { mutate: deleteAssignment } = useDeleteAssignment();

  return (
    <FlexGrow>
      <DataTable<DataType>
        data={data}
        columns={columns}
        getRowId={(row) => `${row.assignmentId}`}
        state={{ isLoading }}
        onCreate={(row) => createAssignment(row)}
        onUpdate={(row) => updateAssignment(row)}
        onDelete={(row) => deleteAssignment(row)}
        renderTopToolbarCustomActions={() => (
          <Button
            component={Link}
            to="new"
            variant="outlined"
            size="small"
            startIcon={<Add />}
            sx={{ textTransform: 'none' }}
          >
            Lägg till uppdrag
          </Button>
        )}
        renderEditRowDialogContent={({ row, table }) => (
          <>
            <DialogTitle sx={{ textAlign: 'center' }}>Redigera uppdrag</DialogTitle>
            <DialogContent>
              <AssignmentForm
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

export default AssignmentsPage;
