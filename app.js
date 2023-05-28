const http=require('http');

const bodyparams=require('body-params')

const adminroute=require('../routes/admin')

const express=require('express');
const app= express();

app.use('/', (req,res,next)=>
{
    console.log("Hi I am middleware");
    next();
})

app.use(adminroute);

app.use((req,res,next)=>
{
    console.log("I an second middleware")
    console.log(bodyparams.urlencoded({extended:false}))
    res.redirect('/');
})

app.listen(2000);

