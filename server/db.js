 const express=require('express');
 const mongoose=require('mongoose');
 const app=express();
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});


 const db=process.env.DATABASE;
 mongoose.connect(db).then(()=>{
    console.log("connection sucessfull");
 }).catch((e)=>{console.log(e);})