import { query, runParameterizedQuery } from '@/api/DummyDB';

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
  return await query<
    Contact & {
      companyName: string;
    }
  >(`
    SELECT
      contacts.*,
      c.company_name AS company_name
    FROM contacts
    LEFT JOIN companies c USING (company_id)
`);
};

export const createContact = async (contact: Partial<Contact>) => {
  await runParameterizedQuery('contacts', contact);
};
