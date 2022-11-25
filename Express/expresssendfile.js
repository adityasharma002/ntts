var express = require('express'); 
var app = express(); 

app.get('/', function(req, res){ 
	
	res.sendFile(__dirname + "/" + "test.txt", function (err) { 
		if (err) 
		{ 
			res.send(err); 
		} 
		else 
		{ 
			console.log('File sent successfully'); 
		} 
	}); 
}); 

app.listen(2000, function(err)
{ 
	if (err) console.log(err); 
	console.log("Server started"); 
}); 
