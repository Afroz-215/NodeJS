// let express = require('express');
// const { MongoClient } = require('mongodb');
// let dbName = 'admin';
// let url = 'mongodb://localhost:27017'
// let client = new MongoClient(url);
// let dbConnect = ( async ()=>{
//     await client.connect();
//     let db = client.db(dbName);
//     let collection = db.collection('Department');

//     let result = await collection.find().toArray();
//     console.log(result);
// })

// dbConnect();
// let app = express();

// app.listen(5500,()=>{
//     console.log("first")
// })


const express = require('express');
const { MongoClient } = require("mongodb");
const dbName ='admin';
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);
let collection;

const dbConnect = async ()=>{
    await client.connect();
    const db = client.db(dbName);
    collection = db.collection('Department')

}

dbConnect();
let app = express();

app.get('/department',async(req,res)=>{
    
 const result =await collection.find().toArray();
 res.send(result);
})

app.listen(5500,()=>{
    console.log("first")
})