var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  dbo.dropCollection("student_details", function(err, deleted) {
    if (err) throw err;
    if (deleted) console.log("Collection deleted");
    db.close();
  });
});
