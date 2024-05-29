import { query } from '@/api/DummyDB';
import { useEffect, useState } from 'react';
import { Contact } from './useContacts';
import { Company } from './useCompanies';

// ==============================|| ASSIGNMENTS ||============================== //

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

const sql = `
  SELECT * FROM assignments
  LEFT JOIN contacts USING (contact_id)
  LEFT JOIN companies USING (company_id)
`;

type Result = Assignment & Contact & Company;
const useAssignments = () => {
  const [assignments, setAssignments] = useState<Result[]>([]);

  useEffect(() => {
    setAssignments(query(sql));
  }, []);

  return { data: assignments, isLoading: false };
};

export default useAssignments;
