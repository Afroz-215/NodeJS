// let express =require('express');
// let app =express();

// app.get('/',(req,res)=>{
//     res.end('<h1>Hllo from index page</h1>');
// });

// app.get('/about',(req,res)=>{
//     res.end('Hello from about page');
// });

// app.listen(5500,()=>{
//     console.log("Server is listening on 5500");
// })

// import express from 'express';
// // import home from './pages/home';
// import {home,about} from './pages/home.js'

// let app =express();

// app.get('/',(req,res)=>{
//     res.end(home());
// });

// app.get('/about',(req,res)=>{
//     res.end(about());
// })

// app.listen(5500,()=>{
//     console.log("Server is listening on port no. 5500")
// })


// let express =require('express');
// const { home } = require('./pages/home');
// let app =express();

// app.get('/',(req,res)=>{
//     res.send(home());
// });

// app.get('/login',(req,res)=>{
//     res.send(`<form action='submit' method='post'>
//         <input type='text' placeholder='enter your name' />
//         <br>
//         <br>
//         <input type='text' placeholder='enter your password' />
//         <br>
//         <br>
//         <button type='submit'>Submit</button>
//         </form>`);

// });

// app.post('/submit',(req,res)=>{
//     res.send('Data Submited sccessfully')
// });

// app.listen(5500,()=>{
//      console.log("Server is listening on port no. 5500");
// })



//  

// let express =require('express');
// let home =require('./pages/home.js');
// const login = require('./pages/login');
// const sub = require('./pages/submit.js');
// let app =express();

// app.get('/',(req,res)=>{
//        res.send(home());
// })

// app.get('/login',(req,res)=>{
//     res.send(login());
// })

// app.post('/submit',(req,res)=>{
//     res.send(sub());
// })

// app.use((req,res)=>{
//     res.send(`<h1>404</h1><br><h1>Page not found</h1>`);
// })
// app.listen(5500,()=>{
//     console.log("Start")
// })






// let express =require('express');
// let path =require('path');
// let file =path.resolve('HTML')
// let app =express();

// app.get('/',(req,res)=>{
//     let absPath =path.resolve(file +'/home.html');
//     res.sendFile(absPath);
// })

// app.get('/login',(req,res)=>{
//     let absPath =path.resolve(file +'/login.html');
//     res.sendFile(absPath);
// })

// app.post('/submit',(req,res)=>{
//     let absPath =path.resolve(file +'/submit.html');
//     res.sendFile(absPath)
// })

// app.use((req,res)=>{
//     let absPath =path.resolve(file +'/404.html');
//     res.sendFile(absPath)
// })
// // app.get('/',(req,res)=>{
// //     res.sendFile(file+'/home.html')
// // });



// app.listen(5500,()=>{
//     console.log("first")
// })


let express = require('express');
let path = require('path');

let app = express();

let absPath = path.resolve('HTML');  
// let publicPath =path.resolve('Express.js');
let publicPath =path.resolve();

app.use(express.static(publicPath));
console.log(publicPath);

app.get('/', (req, res) => {
    res.sendFile(path.join(absPath, 'home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(absPath, 'login.html'));
});

app.post('/submit', (req, res) => {
    res.sendFile(path.join(absPath, 'submit.html'));
});

app.use((req, res) => {
    res.sendFile(path.join(absPath, '404.html'));
});

app.listen(5500, () => {
    console.log("first");
});