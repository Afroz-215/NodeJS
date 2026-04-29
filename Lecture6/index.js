// let http = require('http')
// let fs = require('fs')

// let userData = [
//     {
//         name: 'shalu',
//         age: 30,
//         email: 'shalu@gmail.com'
//     },
//     {
//         name: 'shaloni',
//         age: 30,
//         email: 'shaloni@gmail.com'
//     },
//     {
//         name: 'kavi',
//         age: 30,
//         email: 'kavi@gmail.com'
//     }
// ]

// // http.createServer((req, res) => {
// //     // res.setHeader("Content-Type", "application/json");
// //     // res.write(JSON.stringify(userData))
// //     // res.end();
// //     res.setHeader("Content-Type","Text/html")
// //     console.log(req.method)
// //     if(req.url == '/')  res.write("<h1>home</h1>")
// //         else if(req.url =='/login') res.write("<h2>Login</h2>")
// //     else res.write('other page ')
// // res.end()
// // }).listen(3030)

// // const arg=process.argv;
// // console.log(arg[2], "Command line input")
// // const port =arg[2];
// // http.createServer((req,res)=>{
// //     res.end()
// // }).listen(port)

// http.createServer((req, res) => {
//     fs.readFile('html/index.html', 'utf-8', (error, data) => {
//         res.write(500, { "Content-type": 'text/plain' })
//         if (error) res.end('internal server error')

//         res.writeHead(200, { "content-type": 'text/html' });

//         if (req.url == '/') {
//             res.write(data);
//         } else if (req.url == '/submit') {
//             res.write('<h1>Data submitted</h1>');
//         }

//     })
//     res.end()
// }).listen(3030)


// if (req.url == '/') {
//     <form action='/submit' method='post'>
//         input
        
//     </form>
// }

const http = require('http');
const fs = require('fs');
const queryString =require('querystring')

http.createServer((req, resp) => {
  fs.readFile('index.html', 'utf-8', (error, data) => {
    if (error) {
      resp.writeHead(500, { "content-type": 'text/plain' });
      resp.end('internal server error');
      return;
    }

    resp.writeHead(200, { "content-type": 'text/html' });

    if (req.url == '/') {
      resp.write(data);
    } else if (req.url == '/submit') {
        let bodyData =[];
        req.on('data', (chunk)=>{
            bodyData.push(chunk);
        })
        req.on('end',()=>{
            let rawData =Buffer.concat(bodyData).toString();
            let readableData =queryString.parse(rawData);
            let dataString ="My name is "+ readableData.Name + " and my password is "+ readableData.password
            // console.log(rawData)
            // console.log(readableData)
            console.log(dataString)
            //fs.writeFileSync('/Lecture6/' + readableData.Name + '.txt', dataString)
            fs.writeFileSync(readableData.Name + '.txt', dataString)
            console.log("File Created")
            
        })
       resp.write('<h1>Data submitted</h1>');
      // resp.write(`<p>${readableData}</p>`);
    }

    resp.end();
  });
}).listen(3200);