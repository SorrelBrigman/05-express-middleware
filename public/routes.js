'use strict'

const express = require('express');
const app = express();
const { Router } = require('express');
const router = Router();

console.log("ROUTES!!!")

router.get('/home', (req, res, next)=>{
  res.sendFile(__dirname + '/index.html');
  console.log('home');
});

router.get('/chickens', (req, res, next)=>{
  res.sendFile(__dirname + '/chickens.html');
    console.log('chickens');
});

router.get('/eggs', (req, res, next)=>{
  res.sendFile(__dirname + '/eggs.html');
    console.log('eggs');
});

router.get((req, res, next)=>{
  res.send(`page not found, try chickens or eggs`);
})


module.exports = router;