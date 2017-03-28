'use strict'

const express = require('express');
//const { Router } = require('express');


const app = express();

// const router = Router();

// const {easterEgg} = require('./public/controllers/checkForEgg');
const {router} = require(__dirname + '/public/routes/routes.js');

app.use(express.static('public'));



// app.use(easterEgg);
app.use(router);


const port = process.env.PORT || 3000

app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
})
