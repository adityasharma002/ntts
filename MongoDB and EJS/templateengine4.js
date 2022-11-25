var express = require('express');
var app = express();
var data = 
{
name:'James',
courses:['HTML', 'CSS', 'JS']
} 

app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views");

app.get('/', function(req, res){  
    res.render('index4', {data:data}); 
    }); 
    
app.listen(2000);