// let http = require('http');
// let fs = require('fs');

// let server = http.createServer((req, res) => {

//     // let collectHeaderData;
//     //   fs.readFile('./Header.html', 'utf-8', (error, headerData) => {
//     //         if (error) {
//     //             res.writeHead(500, { 'content-type': 'html/plain' })
//     //             res.write('Internal Server error');
//     //             return false;
//     //         }

//     //         collectHeaderData = headerData;
//     //         // res.write(headerData);
//     //         // res.end();
//     //     })

//     let file ='/';
//     if(req.url != '/') file =req.url;

//     let collectHeaderData = fs.readFileSync('./Header.html','utf-8')


//     if (req.url == '/') {
//         fs.readFile("./"+file+".html", 'utf-8', (error, data) => {
//             if (error) {
//                 res.writeHead(500, { 'content-type': 'html/plain' })
//                 res.write('Internal Server error');
//                 return false;
//             }
//             res.write(collectHeaderData + " " + data);
//             res.end();
//         })
//     } else if (req.url == '/style.css') {
//         fs.readFile('./style.css', 'utf-8', (error, data) => {
//             if (error) {
//                 res.writeHead(500, { 'content-type': 'text/css' })
//                 res.write('Css Not Found');
//                 return false;
//             }
//             res.write(data);
//             res.end();
//         })
//     }


// })


// server.listen(4000, () => {
//     console.log("Srvr is listening on port no. 4000");
// })



const http = require("http");
const fs = require("fs");

// Header ko sirf ek baar read karo
const header = fs.readFileSync("./Header.html", "utf-8");

const server = http.createServer((req, res) => {

    // CSS Serve
    if (req.url === "/style.css") {

        fs.readFile("./style.css", "utf-8", (err, data) => {

            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                return res.end("CSS File Not Found");
            }

            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);

        });

        return;
    }

    // Page Name
    let file = "Home";

    if (req.url !== "/") {
        file = req.url.slice(1); // /about -> about
    }

    fs.readFile(`./${file}.html`, "utf-8", (err, data) => {

        if (err) {

            res.writeHead(404, { "Content-Type": "text/html" });

            return res.end("<h1>404 Page Not Found</h1>");

        }

        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(header + data);

    });

});

server.listen(4000, () => {
    console.log("Server running on port no. 4000");
});