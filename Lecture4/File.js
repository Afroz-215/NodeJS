// Firstly Blocking operation are synchronous and the asynchrounous are non-blocking operations 

const fs = require("fs")
const os = require("os")

// console.log("1");
// console.log("2");
// let res =fs.readFileSync("../Lecture3/copy.txt","utf-8");
// console.log(res);
// console.log("3");
// console.log("4");

// This all will run one by one and waits for second until one line will be execute 

// console.log("1");
// console.log("2");
// fs.readFile("../Lecture3/copy.js","utf-8",(err,res)=>{
//     if(err) console.log(err);
//     else console.log(res);
// });
// console.log("3");
// console.log("4");

// This will run  in order as they resolve 
// Default threads - 4
// Max ? - if 8 core cpu - then 8

let maxThread = os.cpus().length;
console.log(maxThread);


// console.log(global);
// // console.log(document);  // browser object -only runs in browser
// console.log("hehe");

console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.platform());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());


// module=> fs => os 
// let fs = require("fs")
// fs.writeFileSync("index.js","hello")
// console.log("hiii");

// fs.writeFile("index.txt","hello from asynch",(err)=>{
//     if(err) throw err
//     console.log("file write successfully");


// })
// fs.rename("index.js","index.js",(err)=>{
//     if(err) throw err
//     console.log("done");

// })

//   fs.appendFileSync("index.txt","hiii")
//   fs.renameSync("index.txt","hello.txt")
//   fs.unlinkSync("hello.txt")

//  let res=    fs.existsSync("index.js")
//  console.log(res);

//   let text=    fs.readFileSync("index.txt")
//   console.log(text.toString());







// fs.writeFile("index2.txt", "hellooo", function (err) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File created")
//     }
// })

// //To read a file using Async
// fs.readFile("index2.txt", "utf-8", function (err, data) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// })

// //To append something in a file using Async
// fs.appendFile("index2.txt", "hellooooo", function (err) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File appended")
//     }
// })

// //To rename a file using Async
// fs.rename("index2.txt", "index3.txt", function (err) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File renamed")
//     }
// })

