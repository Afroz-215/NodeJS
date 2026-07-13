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

import express from 'express';
// import home from './pages/home';
import {home,about} from './pages/home.js'

let app =express();

app.get('/',(req,res)=>{
    res.end(home());
});

app.get('/about',(req,res)=>{
    res.end(about());
})

app.listen(5500,()=>{
    console.log("Server is listening on port no. 5500")
})