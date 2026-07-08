let http = require('http');
let about = require('./about')
let contact = require('./contact')

let server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });

    if (req.url == '/')
        res.write(`<h1>Hello from home page</h1>`);
    else if (req.url == '/about')
        about(req, res);
    else
        contact(req, res);
})

server.listen(5500,()=>{
    console.log("server is starting on port no 5500")
})