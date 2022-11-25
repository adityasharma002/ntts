const express = require("express") 
const multer = require("multer") 
const app = express() 
	
var storage = multer.diskStorage({ 
	destination: function (req, file, cb) { 
		cb(null, "uploads") 
	}, 
	filename: function (req, file, cb) { 
	cb(null, file.fieldname + Date.now()); 
	} 
}) 
	
const maxSize = 1 * 1000 * 1000; 
var upload = multer({ 
    storage: storage, 
	limits: { fileSize: maxSize }, 
}).single("file");	 //use .array("file", value) to upload multiple files and also include multiple in html fils as well
//use .any("file") to upload any number of files

app.get("/",function(req,res){ 
	 res.sendFile(__dirname + '/multer.html');
}) 
	
app.post("/uploadFile",function (req, res, next) { 
	upload(req,res,function(err) { 
		if(err) { 
			res.send("File size is too large") 
		} 
		else { 
			res.send("Success, uploaded!") 
		} 
	}) 
}) 
	
app.listen(2000,function(error) { 
	if(error) throw error 
		console.log("Server created Successfully on PORT 2000") 
}) 
