var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {  
  res.sendFile( __dirname + "/" + "insert.html" );  
})  

app.post('/signup', (req, res)=>{
  MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("customers");

  dbo.collection("customer_details").insertOne(req.body, function(err, data) {
    if (err) throw err;
    console.log("inserted");
    db.close();
    return res.sendFile( __dirname + "/" + "signup_success.html" );
  });
});
})
app.listen(2000);

