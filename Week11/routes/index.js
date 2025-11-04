  
const express = require('express'); 
38 
 
const bodyParser = require('body-parser'); 
const studentRoutes = require('./routes/student'); 
const authRoutes = require('./routes/auth'); 
 
const app = express(); 
const PORT = 3000; 
 
app.use(bodyParser.json()); 
app.use('/api/auth', authRoutes);       
app.use('/api/students', studentRoutes); 
 
app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`); 
}); 