console.log("Hello, Clement.");

const express = require('express');
const app = express();
const data = require('data');

app.get('/', function(req, res) {
  res.send("We're rollin...");
  res.send(data);
});

app.listen(3000, function() {
  console.log("User Directory app started");
});
