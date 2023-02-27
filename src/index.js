const express=require('express');
const app=express();
const Tweet=require('./models/tweet');
const connect=require("./config/database");

const PORT=3000;

app.listen(PORT,async ()=>{
    
    await connect();
    Tweet.create({content:"this is my third tweet",userEmail:"ankush@gmail.com"});

    console.log(`listening on port ${PORT}`);
});
