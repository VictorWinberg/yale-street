import { deleteParameterizedQuery, insertParameterizedQuery, query, updateParameterizedQuery } from '@/api/DummyDB';
import { pick } from '@/utils';

export type Assignment = {
  assignmentId: number;
  assignmentName: string;
  responsiblePersonId: number;
  externalContactPersonId: number;
  relevantFiles: string;
  fee: number;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export const fetchAssignments = async () => {
  const data = await query<
    Assignment & {
      responsiblePersonName: string;
      responsiblePersonEmail: string;
      responsibleCompanyName: string;
      externalContactPersonName: string;
      externalContactPersonEmail: string;
      externalCompanyName: string;
    }
  >(`
    SELECT
      assignments.*,
      (rp.contact_name) AS responsible_person_name,
      rp.email AS responsible_person_email,
      rc.company_name AS responsible_company_name,
      (ecp.contact_name) AS external_contact_person_name,
      ecp.email AS external_contact_person_email,
      ec.company_name AS external_company_name
    FROM assignments
    LEFT JOIN contacts rp ON responsible_person_id = rp.contact_id
    LEFT JOIN contacts ecp ON external_contact_person_id = ecp.contact_id
    LEFT JOIN companies rc ON rp.company_id = rc.company_id
    LEFT JOIN companies ec ON ecp.company_id = ec.company_id
  `);
  return data;
};

export const createAssignment = async (assignment: Partial<Assignment>) => {
  await insertParameterizedQuery<Assignment>(
    'assignments',
    pick(assignment, [
      'assignmentName',
      'responsiblePersonId',
      'externalContactPersonId',
      'relevantFiles',
      'fee',
      'type',
      'status'
    ])
  );
};

export const updateAssignment = async (assignment: Partial<Assignment>) => {
  await updateParameterizedQuery<Assignment>(
    'assignments',
    pick(assignment, [
      'assignmentName',
      'responsiblePersonId',
      'externalContactPersonId',
      'relevantFiles',
      'fee',
      'type',
      'status'
    ]),
    pick(assignment, ['assignmentId'])
  );
};

export const deleteAssignment = async ({ assignmentId }: Pick<Assignment, 'assignmentId'>) => {
  await deleteParameterizedQuery<Assignment>('assignments', { assignmentId });
};
