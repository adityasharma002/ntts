var express = require('express');
var app = express();
var student = "James";
var courses = ["HTML", "CSS", "JS"];

app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views"); 

app.get("/", function(req, res){
    res.render("index2", { studentname: student, coursesnames: courses });
    }); 

app.listen(2000);