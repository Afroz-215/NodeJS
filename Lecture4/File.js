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
