const express=require('express');
const mongoose=require('mongoose');
require('./database/dbconnection');
const app=express();
app.use(require('./router/auth'));
app.use(express.json());
const PORT=process.env.PORT||5000;


app.get('/',(req,res)=> {
    res.send("welcome to the server side");
});


app.listen(5000,()=>
{console.log('server is running at port 5000');
});
