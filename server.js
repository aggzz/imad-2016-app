var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = {
  host: 'db.imad.hasura-app.io',
  user: 'aggzz',
  password: process.env.DB_PASSWORD ,
  database: 'aggzz',
  port: '5432',
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret: 'someRandomSecretValue',
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30}
}));

function createTemplate(data){
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config)
app.get('/test_db', function (req, res) {
  
  
  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get("/articleone", function(req,res){
    res.sendFile(path.join(__dirname, 'article-one.html'));
});
    
app.get("/fun.html", function(req,res){
    res.sendFile(path.join(__dirname,"ui", 'fun.html'));    
});

app.get("/fac.html", function(req,res){
    res.sendFile(path.join(__dirname,"ui", 'fac.html'));    
});

app.get('/sass.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'sass'));
});

app.get('/cl.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'cl.png'));
});



var counter=0;
app.get('/counter', function(req,res){
    counter= counter+1;
    res.send(counter.toString());
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
