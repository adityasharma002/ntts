var fs = require('fs');
var express = require('express');
var app = express();

var data = fs.readFileSync('studentdata.json');
var studentdata = JSON.parse(data);
console.log(studentdata);

app.get('/add/:course/:marks', addCourse);

function addCourse(request, response){
var data = request.params;
//console.log(request.params);
var course = data.course;
var marks = Number(data.marks);
var reply;

        studentdata[course] = marks;
        var data = JSON.stringify(studentdata, null, 2);
        fs.writeFile('studentdata.json', data, finished);
        function finished(err){
        console.log("all set");

        reply={
            msg:"Course and marks inserted"
            }
        response.send(reply);
        }
    }

    app.get('/all', function (req, res) {   
    var data = fs.readFileSync('studentdata.json');
    res.end(data); 
    console.log('The data is updated to : '+data) 
     }) 

app.listen(3000,function listening(){
    console.log('Server started');
});