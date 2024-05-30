import { query } from '@/api/DummyDB';

export type Company = {
  companyId: number;
  companyName: string;
  address: string;
  industry: string;
  phone: string;
  email: string;
  website: string;
  createdAt: string;
  updatedAt: string;
};

export const fetchCompanies = async () => {
  return await query<Company>(`
    SELECT * FROM companies
  `);
};
