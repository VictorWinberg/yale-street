import { query, runParameterizedQuery } from '@/api/DummyDB';
import { Company } from '@/features/companies/api/companiesApi';
import { Contact } from '@/features/contacts/api/contactsApi';

export type Assignment = {
  assignmentId: number;
  assignmentName: string;
  contactId: number;
  relevantFiles: string;
  fee: number;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type Result = Assignment & Contact & Company;

export const fetchAssignments = async () => {
  return await query<Result>(`
    SELECT * FROM assignments
    LEFT JOIN contacts USING (contact_id)
    LEFT JOIN companies USING (company_id)
    `);
};

export const createAssignment = async (assignment: Partial<Assignment>) => {
  await runParameterizedQuery('assignments', assignment);
};
