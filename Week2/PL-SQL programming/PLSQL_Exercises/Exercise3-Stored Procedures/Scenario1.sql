CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR acc IN (
    SELECT account_id, balance 
    FROM accounts 
    WHERE LOWER(account_type) = 'savings'
  ) LOOP
    UPDATE accounts
    SET balance = balance + (acc.balance * 0.01)
    WHERE account_id = acc.account_id;
    
    DBMS_OUTPUT.PUT_LINE('Interest added to account ' || acc.account_id);
  END LOOP;

  COMMIT;
END;
