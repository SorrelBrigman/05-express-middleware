'use strict'

const express = require('express');

const app = express();
const routes = require(__dirname + '/public/routes.js');
const errorHandler = require(__dirname + '/public/errorHandler.js');
const easterEgg = require(__dirname + '/public/easterEgg.js');
const port = process.env.PORT || 3000

app.use(express.static('public'));

app.use(routes);



app.use(easterEgg);
app.use(errorHandler);

app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
});
