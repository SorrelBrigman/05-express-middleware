'use strict'

const { Router } = require('express');

const router = Router();


router.get('/', (req, res, next)=>{
  res.sendFile('index.html')
});

router.get('/home', (req, res, next)=>{
  res.sendFile('index.html')
});

router.get('/see-our-chickens', (req, res, next)=>{
  console.log('chickens')
  res.sendFile('chickens.html')
});

router.get('/see-our-eggs', (req, res, next)=>{
  res.sendFile('eggs.html');
});


router.get((req, res, next)=>{
  res.send(`page not found`);
});


module.exports = router;
