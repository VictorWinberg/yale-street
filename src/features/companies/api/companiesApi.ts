import { deleteParameterizedQuery, query, insertParameterizedQuery, updateParameterizedQuery } from '@/api/DummyDB';
import { pick } from '@/utils';

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

export const createCompany = async (company: Partial<Company>) => {
  await insertParameterizedQuery<Company>(
    'companies',
    pick(company, ['companyName', 'address', 'industry', 'phone', 'email', 'website'])
  );
};

export const updateCompany = async (company: Partial<Company>) => {
  await updateParameterizedQuery<Company>(
    'companies',
    pick(company, ['companyName', 'address', 'industry', 'phone', 'email', 'website']),
    pick(company, ['companyId'])
  );
};

export const deleteCompany = async (companyId: number) => {
  await deleteParameterizedQuery<Company>('companies', { companyId });
};
