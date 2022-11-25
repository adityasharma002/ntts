//Find students with marks greater than equal to 80
//use gte for >= and lte for <=
//use gt for > and lt for <
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var request = ({marks: {$gte: 80}});
  dbo.collection("student_details").find(request).toArray(function(err, data) {
    if (err) throw err;
    console.log(data);
    db.close();
  });
});