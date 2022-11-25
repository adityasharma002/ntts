var express = require('express'); 
var app = express();  
app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "button.html" );  
 }) 
app.get('/download', function(req, res){ 
	res.download('IEEE format.doc', function(err){ 
        if(err) {console.error("No such file");}
        else
        {console.log("File downloaded successfully");}
	}); 
}); 

app.listen(2000, function(err){ 
    if (err) {console.error(err);}
    else
	{console.log("Server started"); }
});
