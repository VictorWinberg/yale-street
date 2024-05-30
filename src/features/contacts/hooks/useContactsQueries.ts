import { query } from '@/api/DummyDB';
import { useEffect, useState } from 'react';

// ==============================|| CONTACTS ||============================== //

export type Contact = {
  contactId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyId: number;
  position: string;
  address: string;
  notes: string;
  lastInteractionDate: string; // ISO date string
};

const sql = `
  SELECT * FROM contacts
  LEFT JOIN companies USING (company_id)
`;

const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(query(sql));
  }, []);

  return { data: contacts, isLoading: false };
};

export default useContacts;
