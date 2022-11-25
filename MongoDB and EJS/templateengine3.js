var express = require('express');
var app = express();
var students = 
{
1: "Manoj",
2: "James",
3: "Aneesh"
}

app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views"); 

app.get("/students/:id", function(req, res){
    res.render("index3", {name: students[req.params.id], id:req.params.id });
    }); 

app.listen(2000);