-- Table: accounts
CREATE TABLE accounts (
    account_id     NUMBER PRIMARY KEY,
    customer_id    NUMBER,
    account_type   VARCHAR2(20), -- 'savings', 'current', etc.
    balance        NUMBER
);

-- Table: employees
CREATE TABLE employees (
    emp_id         NUMBER PRIMARY KEY,
    department_id  NUMBER,
    salary         NUMBER,
    performance    VARCHAR2(20)
);
