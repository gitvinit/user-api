var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRouter = require('./user/user-routes')();

app.use('/users', userRouter);
var AuthController = require('./auth/auth-controller');
app.use('/api/auth', AuthController);
app.get('/', function (req, res) {
    res.send("Hello");
});
module.exports = app;