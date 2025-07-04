import org.hibernate.*;

public class App {
    public static void main(String[] args) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = null;

        try {
            tx = session.beginTransaction();
            Employee emp = new Employee();
            emp.setName("John Doe");
            session.save(emp);
            tx.commit();
            System.out.println("Employee saved with ID: " + emp.getId());
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }
}
