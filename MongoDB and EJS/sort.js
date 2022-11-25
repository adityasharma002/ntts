var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var seq = { name: -1 }; //ascending order
  dbo.collection("student_details").find().sort(seq).toArray(function(err, data) {
    if (err) throw err;
    console.log(data);
    db.close();
  });
});