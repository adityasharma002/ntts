var express = require('express');  
var app = express();   
//var path = require('path');

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "form.html" );  

   //The __dirname in a node script returns the path of the folder where the current JavaScript file resides.

  //res.sendFile(path.join(__dirname, '/folder', 'form.html')); 
}) 
 
app.get('/apply', function (req, res) {  
response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name,
       gender: req.query.gender,
       adrr:req.query.addr
   };  
   console.log(response);  
  res.end(response);  
});

app.listen(2000, function (err) {  
 
  if (err) console.log(err); 
	console.log("Server started"); 
  
})  
