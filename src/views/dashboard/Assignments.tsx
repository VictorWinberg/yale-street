// material-ui
import { Box, Divider } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Uppdragsnamn', width: 160 },
  { field: 'company', headerName: 'Bolag', width: 160 },
  {
    field: 'email',
    headerName: 'Email',
    width: 230
  },
  {
    field: 'responsible',
    headerName: 'Ansvarig',
    width: 160,
    sortable: false,
    valueGetter: (_value, row) => `${row.name || ''}`
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    sortable: false
  },
  {
    field: 'fee',
    headerName: 'Arvode',
    width: 120,
    flex: 1,
    type: 'number',
    renderCell: ({ value }) =>
      Number(value).toLocaleString('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
  }
];

const rows = [
  { id: 1, name: 'Victor Winberg', company: 'Netcompany', email: 'victor.winberg@netcompany.com', status: 'Prospektarbete', fee: 500000 },
  { id: 2, name: 'Sebastian Eriksson', company: 'Newsec', email: 'sebastian.eriksson@newsec.se', status: 'Prospektarbete', fee: 1500000 },
  { id: 3, name: 'Jan Zubac', company: 'Jayway', email: 'jan.zubac@jayway.se', status: 'Marknadsföring', fee: 2500000 }
];

// ==============================|| SAMPLE PAGE ||============================== //

const Assignments = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
    <Divider sx={{ my: 2 }} />
    <DataGrid
      rows={rows}
      columns={columns}
      autoPageSize
      density="compact"
      sx={{
        mx: -1,
        '&, [class^=MuiDataGrid]': { border: 'none' },
        '& .MuiDataGrid-columnHeader': {
          color: '#000'
        },
        '& .MuiDataGrid-cell:focus-within': {
          outline: 'none !important'
        }
      }}
      onRowClick={console.log}
    />
  </Box>
);

export default Assignments;
