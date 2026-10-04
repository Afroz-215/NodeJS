// // let express=require('express');
// // let app =express();

// // app.get('/',(req,res)=>{
// //     const users =['ram','lalit','shyam','deepak'];
// //     let data =`<ul>`
// //     for(let i=0;i<users.length;i++){
// //         data+=`<li><a href='/user/${users[i]}'></a>${users[i]}</li>`
// //         console.log(users[i]);
// //     }
// //     data+=`</ul>`
// //     res.send(data);
// // });

// // app.get("/user/:name",(req,res)=>{
// //     console.log(req.params.name);
// //     const username =req.params.name;
// //     res.send(`This is ${username} profile page`);
// // })

// // app.listen(5500)



// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     const users = ['Ram', 'Lalit', 'Shyam', 'Deepak'];

//     let data = `<ul>`;

//     for (let i = 0; i < users.length; i++) {
//         data += `<li><a href="/user/${users[i]}">${users[i]}</a></li>`;
//         console.log(users[i]);
//     }

//     data += `</ul>`;

//     res.send(data);
// });

// app.get('/user/:name', (req, res) => {
//     console.log(req.params.name);

//     const username = req.params.name;

//     res.send(`This is ${username}'s profile page`);
// });

// app.listen(5500, () => {
//     console.log('Server running on http://localhost:5500');
// });


let express = require('express');
let userData = require('./users.json') 
let app = express();

app.get('/',(req,res)=>{
    console.log(userData);
    res.send(userData);
});

app.get('/user/:id',(req,res)=>{
    const id =req.params.id;
    console.log(id);
    let filterData = userData.filter((user)=>user.id == id);
    res.send(filterData)
})

app.get('/username/:name',(req,res)=>{
    const name =req.params.name;
    console.log(name);
    let filterData = userData.filter((user)=>user.name.toLowerCase() == name.toLowerCase());
    res.send(filterData)
})

app.listen(5500,()=>{
    console.log("server is running on 5500")
});
