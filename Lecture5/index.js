const http = require("http");
const fs = require("fs");


// const myServer =http.createServer((req,res)=>{
//     // console.log("req received");
//     console.log(req);
//     res.end("hello from server");
// });

const myServer = http.createServer((req, res) => {
    if(req.url =="/favicon") res.end();
    const log = `${Date.now()}: New Request Received on ${req.url} \n`;
    
    fs.appendFile("Log.txt", log, (err, data) => {
        // res.end("hello from server again");
        switch (req.url) {
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("I am Afroz");
                break;
            default:
                res.end("404 not found");

        }
    })
})

myServer.listen(3000, () => {
    console.log("Server is running on port no.3000")
})