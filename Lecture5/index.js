// const http = require("http");
// const fs = require("fs");
// const url = require("url")

// // const myServer =http.createServer((req,res)=>{
// //     // console.log("req received");
// //     console.log(req.--);
// //     res.end("hello from server");
// // });

// const myServer = http.createServer((req, res) => {
//     if(req.url === "/favicon.ico" ) return res.end();
//     const log = `${Date.now()}: New Request Received on ${req.url} \n`;
//     const myUrl =url.parse(req.url,true );
//     console.log(myUrl)
    
//     fs.appendFile("Log.txt", log, (err, data) => {
//         // res.end("hello from server again");
//         switch (req.url) {
//             case "/":
//                 res.end("HomePage");
//                 break;
//             case "/about":
//                 res.end("I am ${username } ");
//                 break;
//             default:
//                 res.end("404 not found");

//         }
//     })
// })

// myServer.listen(3000, () => {
//     console.log("Server is running on port no.3000")
// })

// let colors =require('colors');
// console.log(colors.red("hii"))

let http =require('http')

let server = http.createServer((req,res)=>{
    res.setHeader('Content-Type',"Text/html")
    res.write('<h2>Hii</h2>')
    res.end('hello from res.end')
    process.exit();
})

server.listen(5000,()=>{
    console.log("first")
})