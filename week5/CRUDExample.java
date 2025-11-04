import java.sql.*;

public class CRUDExample {

    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/Narasimha";
    private static final String USERNAME = "Tiger";
    private static final String PASSWORD = "chinna";

    public static void main(String[] args) {
        try {
            Connection connection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
            Statement statement = connection.createStatement();

            createRecord(statement, "Happy Junnu", 50000);
            readRecords(statement);

            updateRecord(statement, 1, "Happy Updated", 55000);
            readRecords(statement);

            deleteRecord(statement, 1);
            readRecords(statement);

            statement.close();
            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Create
    private static void createRecord(Statement statement, String name, int salary) throws SQLException {
        String query = "INSERT INTO employees (name, salary) VALUES ('" + name + "', " + salary + ")";
        statement.executeUpdate(query);
        System.out.println("✅ Record inserted\n");
    }

    // Read
    private static void readRecords(Statement statement) throws SQLException {
        String query = "SELECT * FROM employees";
        ResultSet resultSet = statement.executeQuery(query);

        System.out.println("ID\tName\t\tSalary");
        while (resultSet.next()) {
            System.out.println(
                resultSet.getInt("id") + "\t" +
                resultSet.getString("name") + "\t" +
                resultSet.getInt("salary")
            );
        }
        System.out.println();
    }

    // Update
    private static void updateRecord(Statement statement, int id, String newName, int newSalary) throws SQLException {
        String query = "UPDATE employees SET name='" + newName + "', salary=" + newSalary + " WHERE id=" + id;
        statement.executeUpdate(query);
        System.out.println("✅ Record updated\n");
    }

    // Delete
    private static void deleteRecord(Statement statement, int id) throws SQLException {
        String query = "DELETE FROM employees WHERE id=" + id;
        statement.executeUpdate(query);
        System.out.println("✅ Record deleted\n");
    }
}
