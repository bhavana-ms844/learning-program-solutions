import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repo;

    @Transactional
    public void addEmployee(String name) {
        Employee emp = new Employee();
        emp.setName(name);
        repo.save(emp);
        System.out.println("Employee saved with ID: " + emp.getId());
    }
}
