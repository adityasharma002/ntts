var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var request = { course: "Angular js" };
  dbo.collection("student_details").find(request).toArray(function(err, data) {
    if (err) throw err;
    console.log(data);
    db.close();
  });
});

//Find documents whose name starts with letter R, ^ is regular expression operator
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var query = {name: /^R/ };
  dbo.collection("student_details").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/