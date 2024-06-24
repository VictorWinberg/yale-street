CREATE TABLE IF NOT EXISTS assignments (
    assignment_id INTEGER PRIMARY KEY AUTOINCREMENT,
    assignment_name VARCHAR(255),
    responsible_person_id INTEGER,
    external_contact_person_id INTEGER,
    relevant_files VARCHAR(255),
    fee DECIMAL(10, 2),
    type VARCHAR(50),
    status VARCHAR(50),
    created_at DATE,
    updated_at DATE,
    FOREIGN KEY (responsible_person_id) REFERENCES contacts(contact_id),
    FOREIGN KEY (external_contact_person_id) REFERENCES contacts(contact_id)
);

CREATE TABLE IF NOT EXISTS contacts (
    contact_id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    job_title VARCHAR(100),
    company_id INTEGER,
    address VARCHAR(255),
    notes TEXT,
    last_interaction_date DATE,
    created_at DATE,
    updated_at DATE,
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

CREATE TABLE IF NOT EXISTS companies (
    company_id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_name VARCHAR(255),
    address VARCHAR(255),
    industry VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    created_at DATE,
    updated_at DATE
);
