import { useQuery } from '@tanstack/react-query';

import { fetchAssignments } from '../api/assignmentsApi';

export const useAssignments = () => {
  return useQuery({ queryKey: ['assignments'], queryFn: fetchAssignments });
};
