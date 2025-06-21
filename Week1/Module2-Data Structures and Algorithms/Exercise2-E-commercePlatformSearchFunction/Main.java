import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(102, "Laptop", "Electronics"),
            new Product(205, "Shoes", "Fashion"),
            new Product(301, "Book", "Education"),
            new Product(120, "Phone", "Electronics"),
            new Product(150, "T-Shirt", "Fashion")
        };
        System.out.println("Linear Search:");
        Product found1 = SearchEngine.linearSearch(products, 301);
        System.out.println(found1 != null ? "Found: " + found1 : "Not found");
        Arrays.sort(products);
        System.out.println("\nBinary Search:");
        Product found2 = SearchEngine.binarySearch(products, 301);
        System.out.println(found2 != null ? "Found: " + found2 : "Not found");
    }
}
