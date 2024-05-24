import { useEffect, useState } from 'react';

// material-ui
import { Box, Divider } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

// project imports
import DataTable from '@/ui-component/DataTable';

// ==============================|| SEEKING PAGE ||============================== //

interface Data {
  id: number;
  contact: string;
  company: string;
  segment: string;
  geography: string;
  volume: string;
  investmentType: string;
}

const columns: GridColDef[] = [
  { field: 'contact', headerName: 'Kontakt' },
  { field: 'company', headerName: 'Bolag' },
  { field: 'segment', headerName: 'Segment' },
  { field: 'geography', headerName: 'Geografi' },
  { field: 'volume', headerName: 'Volym, SEK' },
  { field: 'investmentType', headerName: 'Typ av investering' }
];

const fakeData: Data[] = [
  {
    id: 1,
    contact: 'Victor Winberg',
    company: 'Netcompany',
    segment: 'IT',
    geography: 'Stockholm',
    volume: '10 000 - 100 000',
    investmentType: 'Core'
  },
  {
    id: 2,
    contact: 'Sebastian Eriksson',
    company: 'Newsec',
    segment: 'Real Estate',
    geography: 'Stockholm',
    volume: '100 000 - 1 000 000',
    investmentType: 'Value-Add'
  }
];

const Seeking = () => {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Replace with real data fetching query library
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setData(fakeData);
      setIsLoading(false);
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

export default Seeking;
