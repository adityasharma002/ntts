var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");

var myobj=[
{name:'Manoj',course:'Node js', marks:78},
{name:'Anuj', course: 'HTML', marks:45},
{name:'Shalini', course: 'HTML', marks:90},
{name:'Ankit', course:'Node js', marks:67},
{name: 'Prakash', course: 'CSS', marks:97},
{name: 'Rajneesh', course: 'CSS', marks:54},
{name: 'Rashi', course: 'React js', marks:82},
{name: 'Sameer', course: 'React js', marks:23},
{name: 'Rahul', course: 'JavaScript', marks:55},
{name: 'Richa', course: 'Vanilla js', marks:73}
];
  dbo.collection("student_details").insertMany(myobj, function(err, data) {
    if (err) throw err;
    console.log("Number of documents inserted: " + data.insertedCount);
    db.close();
  });
});
