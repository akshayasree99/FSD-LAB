<%@ page import="java.sql.*" %> 
<% 
    String username = request.getParameter("username"); 
    String email = request.getParameter("email"); 
    String password = request.getParameter("password"); 
 
    Connection conn = null; 
    PreparedStatement stmt = null; 
26 
 
 
    try { 
        Class.forName("com.mysql.cj.jdbc.Driver"); 
        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/UserDB", "root", ""); 
 
        String query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"; 
        stmt = conn.prepareStatement(query); 
        stmt.setString(1, username); 
        stmt.setString(2, email); 
        stmt.setString(3, password); 
 
        int rowsInserted = stmt.executeUpdate(); 
        if (rowsInserted > 0) { 
            out.println("<h3>Registration Successful!</h3>"); 
            out.println("<a href='login.html'>Go to Login</a>"); 
        } else { 
            out.println("<h3>Registration Failed!</h3>"); 
        } 
    } catch (Exception e) { 
        out.println("<h3>Error: " + e.getMessage() + "</h3>"); 
    } finally { 
        if (stmt != null) stmt.close(); 
        if (conn != null) conn.close(); 
    } 
%> 