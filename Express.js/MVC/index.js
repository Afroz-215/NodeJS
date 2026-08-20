// let express= require ('express')
// let app =express();
// let {handleUsers} = require('./Controller/usrCntrllr.js')
// app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     res.send("<h2>Hello from MVC<h2>")
// })

// app.get('/users',handleUsers)

// app.listen(5500,()=>{
//     console.log("Server is listening on port no 5500");
// });

// let express=require('express');
// let app =express();
// app.set('view engine','ejs');
// let {handleUser} =require('./Controller/usrCntrllr.js')

// app.get('/',(req,res)=>{
//     res.send('Hii from Mvc')
// })

// app.get('/user',handleUser);

// app.listen(5500,()=>{
//     console.log("Server is running on port no. 5500")
// })


let express=require('express');
let app =express();
let handleUser = require('./Controller/usrCntrllr.js')
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send("Hii , I am rupali");
})

app.get('/users',handleUser);

app.listen(5500,()=>{
    console.log("Server is running on port no. 5500")
})