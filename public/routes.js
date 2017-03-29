'use strict'

// const express = require('express');
// const app = express();
const { Router } = require('express');
const router = Router();

console.log("ROUTES!!!")

router.get('/', (req, res, next)=>{
  res.sendFile(__dirname + '/index1.html');

});


router.get('/home', (req, res, next)=>{
  res.sendFile(__dirname + '/index1.html');

});

router.get('/see-our-chickens', (req, res, next)=>{
  res.sendFile(__dirname + '/chickens.html');

});

router.get('/see-our-eggs', (req, res, next)=>{
  res.sendFile(__dirname + '/eggs.html');

    next();
});




module.exports = router;
