let http = require('http');
let userForm=require('./userForm')
let userData =require('./userData')
let server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/html'})
    if(req.url == '/')
        userForm(req,res);
    else if(req.url == '/submit')
        userData(req,res)
    else
        res.write('this is default msg')


    res.end('hii');
});

server.listen(4000, () => {
    console.log('hello from server');
});