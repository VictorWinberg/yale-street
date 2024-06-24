-- Seed data for companies table
INSERT INTO companies (company_name, address, industry, phone, email, website, created_at, updated_at)
VALUES
    ('ABC Corp', '123 Main St, Anytown', 'Technology', '123-456-7890', 'info@abccorp.com', 'http://www.abccorp.com', '2024-05-28', '2024-05-28'),
    ('XYZ Ltd', '456 Elm St, Othertown', 'Finance', '987-654-3210', 'info@xyzltd.com', 'http://www.xyzltd.com', '2024-05-27', '2024-05-27'),
    ('123 Industries', '789 Oak St, Anothertown', 'Manufacturing', '555-555-5555', 'info@123industries.com', 'http://www.123industries.com', '2024-05-26', '2024-05-26');

-- Seed data for contacts table
INSERT INTO contacts (contact_name, email, phone, company_id, job_title, address, notes, last_interaction_date, created_at, updated_at)
VALUES
    ('John Doe', 'john.doe@abccorp.com', '123-456-7890', 1, 'CEO', '123 Main St, Anytown', 'Main contact person', '2024-05-28', '2024-05-28', '2024-05-28'),
    ('Jane Smith', 'jane.smith@xyzltd.com', '987-654-3210', 2, 'CFO', '456 Elm St, Othertown', 'Finance department', '2024-05-27', '2024-05-27', '2024-05-27'),
    ('Alice Johnson', 'alice.johnson@123industries.com', '555-555-5555', 3, 'Engineer', '789 Oak St, Anothertown', 'Technical contact', '2024-05-26', '2024-05-26', '2024-05-26');

-- Seed data for assignments table
INSERT INTO assignments (assignment_name, responsible_person_id, external_contact_person_id, relevant_files, fee, type, status, created_at, updated_at)
VALUES
    ('Project A', 1, 3, 'file1.pdf, file2.doc', 5000.00, 'Development', 'Pending', '2024-05-25', '2024-05-28'),
    ('Task B', 2, 1, 'file3.jpg', 2500.00, 'Consulting', 'In Progress', '2024-05-24', '2024-05-27'),
    ('Job C', 3, 2, 'file4.txt', 7500.00, 'Maintenance', 'Completed', '2024-05-23', '2024-05-26');

