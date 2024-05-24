import { useEffect, useState } from 'react';

// material-ui
import { Box, Divider } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

// project imports
import DataTable from '@/ui-component/DataTable';

// ==============================|| CONTACTS PAGE ||============================== //

interface Data {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  updatedAt: string;
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Uppdragsnamn' },
  { field: 'company', headerName: 'Bolag' },
  { field: 'email', headerName: 'Email' },
  { field: 'phone', headerName: 'Telefonnummer' },
  { field: 'updatedAt', headerName: 'Senast uppdaterad', headerAlign: 'right', align: 'right' }
];

const fakeData: Data[] = [
  {
    id: 1,
    name: 'Victor Winberg',
    company: 'Netcompany',
    email: 'victor.winberg@netcompany.com',
    phone: '+46702483978',
    updatedAt: '2024-01-01'
  },
  {
    id: 2,
    name: 'Sebastian Eriksson',
    company: 'Newsec',
    email: 'sebastian.eriksson@newsec.se',
    phone: '+46704278490',
    updatedAt: '2024-04-01'
  }
];

const Contacts = () => {
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

export default Contacts;
