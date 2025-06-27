CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    dept_id IN NUMBER,
    bonus_percent IN NUMBER
) IS
BEGIN
  FOR emp IN (
    SELECT emp_id, salary FROM employees WHERE department_id = dept_id
  ) LOOP
    UPDATE employees
    SET salary = salary + (emp.salary * bonus_percent / 100)
    WHERE emp_id = emp.emp_id;
    
    DBMS_OUTPUT.PUT_LINE('Bonus updated for employee ' || emp.emp_id);
  END LOOP;

  COMMIT;
END;
