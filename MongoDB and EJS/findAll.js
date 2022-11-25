var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  dbo.collection("student_details").find().toArray(function(err, data) {
    if (err) throw err;
    console.log(data);
    db.close();
  });
});