const express = require('express')
const app = express();

app.get('/' , (req,res)=>{
    res.send("hello orld")
})


app.listen(2345 ,()=>{
    console.log("Server started at http://localhost:2345")
})