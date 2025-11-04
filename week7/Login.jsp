<%@ page import="java.sql.*" %> 
<% 
    String username = request.getParameter("username"); 
    String password = request.getParameter("password"); 
 
    Connection conn = null; 
    PreparedStatement stmt = null; 
    ResultSet rs = null; 
 
    try { 
        Class.forName("com.mysql.cj.jdbc.Driver"); 
        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/UserDB", "root", ""); 
 
        String query = "SELECT * FROM users WHERE username=? AND password=?"; 
        stmt = conn.prepareStatement(query); 
        stmt.setString(1, username); 
27 
 
        stmt.setString(2, password); 
        rs = stmt.executeQuery(); 
 
        if (rs.next()) { 
            out.println("<h3>Login Successful!</h3>"); 
        } else { 
            out.println("<h3>Invalid Username or Password</h3>"); 
            out.println("<a href='login.html'>Try Again</a>"); 
        } 
    } catch (Exception e) { 
        out.println("<h3>Error: " + e.getMessage() + "</h3>"); 
    } finally { 
        if (rs != null) rs.close(); 
        if (stmt != null) stmt.close(); 
        if (conn != null) conn.close(); 
    } 
%> 