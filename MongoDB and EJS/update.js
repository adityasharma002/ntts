var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var request = { course: "Node js" };
  var newdata = { $set: {course:"Angular js", marks: 0 } };
  dbo.collection("student_details").updateMany(request, newdata, function(err,data) {
    if (err) throw err;
    console.log("updated");
    db.close();
  });
});