const express = require("express") 
const app = express();
const { check, validationResult, oneOf } = require('express-validator'); 
var fs = require('fs');
const bodyparser = require('body-parser') 

app.use(bodyparser.urlencoded({ extended: false })) 

app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "validator form1.html" );  
 }) 

app.post('/saveData', [ 

    oneOf([

        check('countries').isIn(['India', 'USA', 'Germany']).withMessage('Please select city')]),
    
    oneOf([

        check('chec').isIn(['agreement']).withMessage('Please agree to terms and conditions')])


], function(req, res) { 

	const errors = validationResult(req); 
	if (!errors.isEmpty()) { 
		res.send(errors) 
	} 

	else { 
        response = {  
            countries:req.body.countries,
            chec:req.body.chec
           
           };  
           let data = JSON.stringify(response, null, 2);
           fs.writeFile('test.txt', data, function () { 
            console.log('Write operation complete.');
        });
        res.end("successfully submitted");

	} 
}); 

app.listen(2000, function (error) { 
	if (error) throw error 
	console.log("Server created Successfully"); 
}) 
