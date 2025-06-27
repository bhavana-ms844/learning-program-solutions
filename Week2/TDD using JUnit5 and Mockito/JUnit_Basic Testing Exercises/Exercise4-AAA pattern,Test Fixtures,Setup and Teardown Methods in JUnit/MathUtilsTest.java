import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class MathUtilsTest {

    private MathUtils mathUtils;

    // Setup method - runs before each test
    @Before
    public void setUp() {
        mathUtils = new MathUtils();
        System.out.println(">> Setup: MathUtils instance created");
    }

    // Teardown method - runs after each test
    @After
    public void tearDown() {
        mathUtils = null;
        System.out.println("<< Teardown: MathUtils instance cleared");
    }

    @Test
    public void testAdd() {
        // Arrange
        int a = 10;
        int b = 5;

        // Act
        int result = mathUtils.add(a, b);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testMultiply() {
        // Arrange
        int a = 4;
        int b = 3;

        // Act
        int result = mathUtils.multiply(a, b);

        // Assert
        assertEquals(12, result);
    }

    @Test
    public void testDivide() {
        // Arrange
        int a = 20;
        int b = 4;

        // Act
        int result = mathUtils.divide(a, b);

        // Assert
        assertEquals(5, result);
    }
}
