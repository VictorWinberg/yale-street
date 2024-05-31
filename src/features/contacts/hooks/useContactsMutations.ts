import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createContact } from '../api/contactsApi';

export const useCreateContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    }
  });
};
