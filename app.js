'use strict'

const express = require('express');

const app = express();
const routes = require(__dirname + '/public/routes.js');
const port = process.env.PORT || 3000

app.use(express.static('public'));

app.use(routes);


app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
});
