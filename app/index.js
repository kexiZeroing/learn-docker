const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
  extended: true
}));

// support parsing of application/json type post data
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// use when starting application locally
const mongoUrlLocal = "mongodb://admin:password@localhost:27017";

// use when starting application as docker container
const mongoUrlDocker = "mongodb://admin:password@mongodb";

app.get('/profile', function (req, res) {
  let response;
  MongoClient.connect(mongoUrlLocal, function (err, client) {
    if (err) throw err;
    let db = client.db('my-db');

    db.collection('users').findOne({userid: 1}, function (err, result) {
      if (err) throw err;
      response = result;
      res.send(response ? response : {});
    });
  });
});

app.post('/profile', function (req, res) {
  let userObj = req.body;
  MongoClient.connect(mongoUrlLocal, function (err, client) {
    if (err) throw err;

    let db = client.db('my-db');
    userObj['userid'] = 1;

    const myquery = { userid: 1 };
    const newVal = { $set: userObj };

    db.collection("users").updateOne(myquery, newVal, {upsert: true}, function(err, res) {
      if (err) throw err;
    });

  });
  res.send(userObj);
});

app.listen(3000, function () {
  console.log("app listening on port 3000...");
});
