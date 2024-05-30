import { query } from '@/api/DummyDB';

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
  lastInteractionDate: string;
  createdAt: string;
  updatedAt: string;
};

export const fetchContacts = async () => {
  return await query<Contact>(`
    SELECT * FROM contacts
    LEFT JOIN companies USING (company_id)
`);
};
