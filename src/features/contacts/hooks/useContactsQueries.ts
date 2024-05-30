import { useQuery } from '@tanstack/react-query';

import { fetchContacts } from '../api/contactsApi';

export const useContacts = () => {
  return useQuery({ queryKey: ['contacts'], queryFn: fetchContacts });
};
