import { useQuery } from '@tanstack/react-query';

import { fetchCompanies } from '../api/companiesApi';

export const useCompanies = () => {
  return useQuery({ queryKey: ['companies'], queryFn: fetchCompanies });
};
