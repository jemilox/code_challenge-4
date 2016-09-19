var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false});
var portDecision = process.env.PORT || 3000;
var pg = require('pg');
var connectionString = 'postgress://localhost:5432/codechallenge4';

app.listen( portDecision, function () {
  console.log("3000 is up!");
});//end server up

app.get('/', urlencodedParser, function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.use(express.static('server/public'));

app.get('/treats', function (req, res) {
  console.log('in /treats');
  pg.connect(connectionString, function (err, client, done) {
    if (err){
      console.log(err);
    }else{
      var allTreats = [];
      var queryResults = client.query('SELECT * FROM treats');
      console.log(queryResults);
      queryResults.on('row', function (row) {
        allTreats.push(row);
      });
      console.log('alltreats', allTreats[0]);
      queryResults.on('end', function () {
        done();
         return res.json(allTreats);
      });//end queryResults function
    }//end else
  });//end pg connect
});//end app.get

app.post('/treats', urlencodedParser, function (req, res) {
  console.log('in post treats');
  console.log('req.body', req.body);
  //create variables from req
  var name = req.body.name;
  var description = req.body.description;
  var url = req.body.url;
  console.log('new variablees', name, description, url);
  //connect to database
  pg.connect( connectionString, function (err, client, done) {
    if (err){
      console.log(err);
    }else {
      console.log('connected to database');
      var queryResults = client.query("INSERT INTO treats(name, description, imageurl) VALUES ($1, $2, $3);", [name, description, url]);
    }//end else
    queryResults.on('end', function () {
      done();
      res.send({success: true});
    });
  });//end pg connect
});//end app.post

app.get('/treats?q=', function (req, res) {
  console.log('in /treats');
  pg.connect(connectionString, function (err, client, done) {
    if (err){
      console.log(err);
    }else{
      var allTreats = [];
      var queryResults = client.query('SELECT * FROM treats');
      console.log(queryResults);
      queryResults.on('row', function (row) {
        allTreats.push(row);
      });
      console.log('alltreats', allTreats[0]);
      queryResults.on('end', function () {
        done();
         return res.json(allTreats);
      });//end queryResults function
    }//end else
  });//end pg connect
});//end app.get
