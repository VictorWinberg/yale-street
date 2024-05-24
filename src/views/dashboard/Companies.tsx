import { useEffect, useState } from 'react';

// material-ui
import { Box, Divider } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

// project imports
import DataTable from '@/ui-component/DataTable';

// ==============================|| COMPANIES PAGE ||============================== //

interface Data {
  id: number;
  name: string;
  company: string;
  organizationNumber: string;
  status: string;
  updatedAt: string;
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Bolagsnamn' },
  { field: 'company', headerName: 'Bolag' },
  { field: 'organizationNumber', headerName: 'Org. Nummer' },
  { field: 'status', headerName: 'Status' },
  { field: 'updatedAt', headerName: 'Senast uppdaterad', headerAlign: 'right', align: 'right' }
];

const fakeData: Data[] = [
  {
    id: 1,
    name: 'Victor Winberg',
    company: 'Netcompany',
    organizationNumber: '556677-8899',
    status: 'Prospektarbete',
    updatedAt: '2024-01-01'
  },
  {
    id: 2,
    name: 'Sebastian Eriksson',
    company: 'Newsec',
    organizationNumber: '556677-8899',
    status: 'Prospektarbete',
    updatedAt: '2024-04-01'
  }
];

const Companies = () => {
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
      <Divider sx={{ my: 2 }} />
      <DataTable rows={data} columns={columns} loading={isLoading} onRowClick={console.log} />
    </Box>
  );
};

export default Companies;
