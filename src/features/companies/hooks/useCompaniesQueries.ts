import { query } from '@/api/DummyDB';
import { useEffect, useState } from 'react';

// ==============================|| COMPANIES ||============================== //

export type Company = {
  companyId: number;
  companyName: string;
  address: string;
  industry: string;
  phone: string;
  email: string;
  website: string;
};

const sql = `
  SELECT * FROM companies
`;

const useCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    setCompanies(query(sql));
  }, []);

  return { data: companies, isLoading: false };
};

export default useCompanies;
