//1.. Creating a Custom Server with http Module:  

const http = require('http');  
const server = http.createServer((req, res) => {      
res.writeHead(200, {'Content-Type': 'text/plain'});      
res.end('Hello, this is a custom server!');});  
const PORT = 3000;server.listen(PORT, () => {      
    console.log(`Server is listening on port ${PORT}`);
});

//2. Exploring Node.js Modules:

//OS
const os = require('os');  
console.log('OS Platform:', os.platform());  
console.log('OS Architecture:', os.arch());  
console.log('Total Memory (in bytes):', os.totalmem());  
console.log('Free Memory (in bytes):', os.freemem());  

//PATH
const path = require('path');  
const filePath = '/path/to/some/file.txt';  
console.log('File Name:', path.basename(filePath));  
console.log('Directory Name:', path.dirname(filePath));  
console.log('File Extension:', path.extname(filePath));


//3.EVENTS MODULE 
const EventEmitter = require('events');  
class MyEmitter extends EventEmitter {} 
const myEmitter = new MyEmitter(); 