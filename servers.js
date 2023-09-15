// node --watch servers
// npm i nodemon
// import express from 'express';
// import dotenv from 'dotenv';
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const User = require('./models/user-model.js')
dotenv.config();



const { PORT, MONGOURI } = process.env;
mongoose.connect(MONGOURI)
    .then(()=>{
        console.log(`Successfully connected to mongoose`)
    })
    .catch((err)=>{
        console.error(err)
    })


const app = express();

app.use(express.static('public'))
app.use(express.json())

// const dir = file => __dirname + '/' + file

app.get("/", async (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get("/signup", async (req, res) => {
    res.sendFile(__dirname + '/public/signup.html')
})

app.post("/signup", async (req, res) => {
    let {username, password} = req.body
    let user = new User({username, password})
    user.save()
        .then(()=>{
            console.log('success')
        })
        .catch(err => console.log)
 //   user.add()
})


// var express = require('express');
// var app = express();


//app.listen(3000);


// var express = require("express");
// var url = require("url");
// //Status codes defined in external file
// require("./http_status.js");

/*
    Middleware
        anything that occurs between the request and response

    (req, res, next) => {
        next()
    }
*/

app.listen(PORT, () => console.log("the force will be with you always. PORT: ", PORT));