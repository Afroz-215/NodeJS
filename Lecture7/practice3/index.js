let http = require('http');
let form = require('./form');
let submit = require('./dashboard');

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});

    if(req.url == '/login')
        form(req,res);
    else if(req.url == '/submit')
        submit(req,res);
    else
        res.end(`<h3>404 not found</h3>`);
})

server.listen(4000, ()=>{
    console.log("server is running on port 4000")
});