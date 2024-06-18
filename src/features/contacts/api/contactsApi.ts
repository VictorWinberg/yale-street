import { deleteParameterizedQuery, query, insertParameterizedQuery, updateParameterizedQuery } from '@/api/DummyDB';
import { pick } from '@/utils';

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
  await insertParameterizedQuery<Contact>(
    'contacts',
    pick(contact, [
      'firstName',
      'lastName',
      'email',
      'phone',
      'companyId',
      'position',
      'address',
      'notes',
      'lastInteractionDate'
    ])
  );
};

export const updateContact = async (contact: Partial<Contact>) => {
  await updateParameterizedQuery<Contact>(
    'contacts',
    pick(contact, [
      'firstName',
      'lastName',
      'email',
      'phone',
      'companyId',
      'position',
      'address',
      'notes',
      'lastInteractionDate'
    ]),
    pick(contact, ['contactId'])
  );
};

export const deleteContact = async ({ contactId }: Pick<Contact, 'contactId'>) => {
  await deleteParameterizedQuery<Contact>('contacts', { contactId });
};
