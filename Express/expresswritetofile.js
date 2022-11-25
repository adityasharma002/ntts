var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');   
var fs = require('fs');

//body parser middleware
app.use(bodyParser.urlencoded({extended:false})) 

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "form1.html" );  
})  
app.post('/apply', function (req, res) {   
   response = {  
    first_name:req.body.first_name,  
    last_name:req.body.last_name,
    gender: req.body.gender,
    adrr:req.body.addr 
   };  
   let data = JSON.stringify(response, null, 2);
   fs.writeFile('test.txt', data, function () { 
    console.log('Write operation complete.');
});
res.end();
})  
app.listen(2000, function (err) {  
 
  if (err) console.log(err); 
	console.log("Server started"); 
  
})  
