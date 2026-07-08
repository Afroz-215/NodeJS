let http = require('http');
let student = require('./student')
let teacher = require('./teacher')

let server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });

    if (req.url == '/admin')
        res.end('Admin page');
    else if (req.url == '/student')
        student(req, res);
    else if (req.url == '/teacher')
        teacher(req,res);
    else
        res.end('404 not found');
});

server.listen(5000,()=>{
    console.log("server is running on port number 5000");
});