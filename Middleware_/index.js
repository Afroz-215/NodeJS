// let express =require('express');
// let app =express();

// // function checkRoute(req,res,next){
// //     console.log("req is going on "+ req.url + " Page");
// //     next();
// // }

// // app.use(checkRoute);

// app.use((req,res,next)=>{
//     console.log("req is going on "+ req.url + " Page");
//     next();
// })

// app.get('/',(req,res)=>{
//     res.send('Home Page');
// })

// app.get('/login',(req,res)=>{
//     res.send('Login Page');
// })

// app.get('/service',(req,res)=>{
//     res.send('Service paage')
// })

// app.listen(5500,()=>{
//     console.log("Server is running on 5500")
// })











// Age Check with middleware 

// let express =require('express');
// let app =express();
// let router =express.Router();


// // Application Middleware

// // function CheckAge(req,res,next){
// //     if(!req.query.age || req.query.age<18){
// //         res.send(`<script>
// //             alert("AGe is not given or is less than 18");
// //         </script>`);
// //     }
// //     else{
// //         next()
// //     }
// // }

// // app.use(CheckAge);




// // IP ADDRESS CHECK

// function ipCheck(req,res,next){
//     let ip = req.socket.remoteAddress;
//     console.log(ip);
//     // next();
//     if(ip.includes('192.168.29.218')){
//         res.send('ALert! you can\'t access this account')
//     }else{
//         next()
//     }
// }
 
// app.use(ipCheck)

// // app.get('/',(req,res)=>{
// //     res.send('Home Page');
// // })


// // Router Middleware

// router.use((req,res,next)=>{
//     console.log("you are on : "+ req.url);
//     next();
// })

// router.get('/',(req,res)=>{
//     res.send('Home Page');
// })

// app.use('/',router)

// app.get('/login',(req,res)=>{
//     res.send('Login Page');
// })


// app.get('/service',(req,res)=>{
//     res.send('Service paage')
// })

// app.listen(5500,()=>{
//     console.log("Server is running on 5500")
// })



// Built -in Middleware 

let express =require('express');
let app = express();
let path=require('path');

// Third party middleware

let morgan =require('morgan');
app.use(morgan('dev'));

app.use(express.static('Css'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// app.get('/',(req,res)=>{
//     let absPath =path.resolve('./HTML/home.html');
//         res.sendFile(absPath);
    
// })

// app.get('/login',(req,res)=>{
//     let absPath =path.resolve('./HTML/login.html');
//         res.sendFile(absPath,req.body);
    
// })

// app.post('/submit',(req,res)=>{
//     let absPath =path.resolve('./HTML/submit.html');
//     console.log(req.body);
//         res.sendFile(absPath);
    
// });

// app.post("/student", (req, res) => {

//     console.log(req.body);

//     res.send("Data Received");

// });

// app.listen(5500);



app.get("/", (req, res) => {
    throw new Error("Something went wrong!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send("Internal Server Error");
});

app.listen(3000);