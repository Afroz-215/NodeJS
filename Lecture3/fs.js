// module=> fs => os 
const fs =require("fs");
//console.log(fs);


//sync
// fs.writeFileSync("test.txt","hello ji");

// //async 
// fs.writeFile("test.txt","hello from async ",(err)=>{
//   if(err) throw err;
//   console.log("file write successfully");
// })

/* -- we can use toString and utf-8 to convert data into readable format  --*/

//sync
// let res =fs.readFileSync("test.txt")
// console.log(res.toString())

//async 
// fs.readFile("test.txt","utf-8",(err,res)=>{
//     if(err) throw err;
//     else console.log(res);
// })

//sync 
// fs.appendFileSync("test.txt","\nhey there");

//async
// fs.appendFile("test.txt","\nhey from async",(err)=>{
//     if(err) throw err;
//     else console.log("file appended");
    
// })

//sync 
// fs.renameSync("test.txt","File.txt");

//async 
// fs.rename("File.txt","Test.txt",(err)=>{
//     if(err) throw err;
//     else console.log("renamed file successfully");
// })

//sync 
// fs.unlinkSync("Test.txt");

//async
// fs.unlink("Test.txt",(err)=>{
//     if(err) console.log(err);
//     else console.log("File deleted successfully");

// })


//sync
// fs.cpSync("Test.txt","copy.txt");

//async
// fs.cp("Test.txt","copy.js",(err)=>{
//     if(err) console.log(err);
//     else console.log("Copied file successfully");
// })

// fs.copyFile("Test.txt","copy.js",(err)=>{
//     if(err) console.log(err);
//     else console.log("Copied file successfully");
// })


//sync
// let res=fs.existsSync("copy.js");
// console.log(res)

//async 
// let res =fs.exists("copy.js",(err)=>{
//     if(err) console.log(err);
//     else console.log("Copied file successfully");
// })

// make directory sync 
// fs.mkdirSync("my-docs",{recursive:true});

//async 
fs.mkdir("my-docss/a/b",{recursive: true },(err)=>{
    if(err) console.log(err);
    else console.log("successfully created ")
})