var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {  
  res.sendFile( __dirname + "/" + "find.html" );  
})  

app.post('/search', (req, res)=>{
  MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("customers");

  dbo.collection("customer_details").find(req.body).toArray(function(err, data) {
    if (err) throw err;
    console.log(data);
    db.close();
    res.json(data);
  });
});
})
app.listen(2000);

