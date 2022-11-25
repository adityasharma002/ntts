var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  dbo.createCollection("student_details", function(err, res) {
    if (err) throw err;
    console.log("Collection created");
    db.close();
  });
});