// const  userlist = require("../Model/usrMdl.js")

// let handleUsers = (req,res)=>{
//     const usersData = userlist();
//     console.log(usersData);
//     res.render('user', {usersData: usersData});
// }

// module.exports = {handleUsers}

// let list =require('../Model/usrMdl.js');

// let handleUser =(req,res)=>{
//     let usersData =list();
//     console.log(usersData);
//     res.render('user',{usersData: usersData})
// }

// module.exports = {handleUser}

let {list} = require('../Model/usrMdl.js')
let handleUser =(req,res)=>{
  let data =list();
  console.log(data);
  res.render('user',{data});
}

module.exports = handleUser