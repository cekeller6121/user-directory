console.log("Hello, Clement.");

const express = require('express');
const app = express();
const users = require('./data.js');
const mustacheExpress = require('mustache-express');
app.use(express.static('./'));

app.engine('mustache', mustacheExpress());
app.set('views', './')
app.set('view engine', 'mustache')

app.get('/', function(req, res) {
  res.render('index', users);
});

// app.get('/:username', function(req, res) {
//   res.render('user', {users:/:username});
// });

app.get('/:username', function (req, res) {
  const user = users.users.find(function (user) { return user.username == req.params.username});
  res.render('user', {user: user});
});

app.listen(3000, function() {
  console.log("User Directory app started");
});
