import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

// project imports
import DataTable from '@/ui-component/DataTable';

// assets
import { Add } from '@mui/icons-material';

// ==============================|| ASSIGNMENTS PAGE ||============================== //

interface Data {
  id: number;
  name: string;
  company: string;
  email: string;
  status: string;
  fee: number;
}

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

const fakeData: Data[] = [
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
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Replace with real data fetching query library
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setIsLoading(false);
      setData(fakeData);
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Box>
        <Button component={Link} to="/assignments/new" variant="outlined" size="small" startIcon={<Add />} sx={{ textTransform: 'none' }}>
          Lägg till uppdrag
        </Button>
      </Box>
      <DataTable rows={data} columns={columns} loading={isLoading} onRowClick={console.log} />
    </Box>
  );
};

export default Assignments;
