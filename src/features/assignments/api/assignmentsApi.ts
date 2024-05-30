import { query } from '@/api/DummyDB';
import { Company } from '@/features/companies/api/companiesApi';
import { Contact } from '@/features/contacts/api/contactsApi';

export type Assignment = {
  assignmentId: number;
  assignmentName: string;
  responsiblePersonId: number;
  assignorContactId: number;
  relevantFiles: string;
  affectedProperties: string;
  fee: number;
  type: string;
  status: string;
  dateCreated: string; // ISO date string
  lastUpdated: string; // ISO date string
};

type Result = Assignment & Contact & Company;

export const fetchAssignments = async () => {
  return await query<Result>(`
    SELECT * FROM assignments
    LEFT JOIN contacts USING (contact_id)
    LEFT JOIN companies USING (company_id)
    `);
};
