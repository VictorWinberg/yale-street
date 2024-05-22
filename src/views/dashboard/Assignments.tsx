import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

// material-ui
import { Box, Divider } from '@mui/material';
import { DataGrid, GridColDef, useGridApiRef } from '@mui/x-data-grid';

// project imports
import useWindowDimension from '@/hooks/useWindowDimension';

// ==============================|| ASSIGNMENTS PAGE ||============================== //

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Uppdragsnamn' },
  { field: 'company', headerName: 'Bolag' },
  { field: 'email', headerName: 'Email' },
  {
    field: 'responsible',
    headerName: 'Ansvarig',
    sortable: false,
    valueGetter: (_value, row) => `${row.name || ''}`
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false
  },
  {
    field: 'fee',
    headerName: 'Arvode',
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

interface Data {
  id: number;
  name: string;
  company: string;
  email: string;
  status: string;
  fee: number;
}

const data = [
  {
    id: 1,
    name: 'Victor Winberg',
    company: 'Netcompany',
    email: 'victor.winberg@netcompany.com',
    status: 'Prospektarbete',
    fee: 500000
  },
  {
    id: 2,
    name: 'Sebastian Eriksson',
    company: 'Newsec',
    email: 'sebastian.eriksson@newsec.se',
    status: 'Prospektarbete',
    fee: 1500000
  },
  { id: 3, name: 'Jan Zubac', company: 'Jayway', email: 'jan.zubac@jayway.se', status: 'Marknadsföring', fee: 2500000 }
];

const Assignments = () => {
  const apiRef = useGridApiRef();

  const [width, _height] = useWindowDimension();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      flushSync(() => {
        setIsLoading(false);
        apiRef.current.setRows(data);
        apiRef.current.autosizeColumns({ expand: true });
      });
    };
    fetchData();
  }, [apiRef]);

  useEffect(() => {
    apiRef.current.autosizeColumns({ expand: true });
  }, [apiRef, width]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Divider sx={{ my: 2 }} />
      <DataGrid
        apiRef={apiRef}
        columns={columns}
        autoPageSize
        loading={isLoading}
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
};

export default Assignments;
