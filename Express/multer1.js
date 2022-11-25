const express = require("express") 
const app = express() 
const multer = require("multer") 

app.set("view engine","ejs") 
	
var storage = multer.diskStorage({ 
	destination: function (req, file, cb) { 
		cb(null, "uploads") 
	}, 
	filename: function (req, file, cb) { 
	cb(null, file.fieldname + "-" + Date.now()+".jpg") 
	} 
}) 
	
const maxSize = 1 * 1000 * 1000; 
	
var upload = multer({ 
	storage: storage, 
	limits: { fileSize: maxSize }, 
	fileFilter: function (req, file, cb){ 
	
		var filetypes = /jpeg|jpg|png/; 
		var mimetype = filetypes.test(file.mimetype); 

		if (mimetype) { 
			return cb(null, true); 
		} 
		cb("Some error"); 
	} 

}).single("photo");	 

app.get("/",function(req,res){ 
	res.render("Signup"); 
}) 
	
app.post("/uploadphoto",function (req, res, next) { 
	upload(req,res,function(err) { 
		if(err) { 
			res.send("Some error") 
		} 
		else { 
			res.send("Image uploaded successfully");
		} 
	}) 
}) 
	
app.listen(2000);