var express = require('express');
var app = express();
var mongoose = require('mongoose');
var database = require('./config/database');
var bodyParser = require('body-parser');         
var Employee = require('./models/employee');
app.use(express.json());
mongoose.connect(database.url);
app.use(bodyParser.urlencoded({ extended: false }));  

app.get('/api/employees', function(req, res) {
	Employee.find(function(err, employees) {
		if (err) return res.send("Not valid request");
		res.json(employees); 
	});
});

app.get('/api/employees/:employee_id', function(req, res) {
	var id = req.params.employee_id;
	Employee.findById(id, function(err, employee) {
		if (err) return res.send("Not valid request");
		res.json(employee);
	});
});

app.post('/api/employees', function(req, res) {
	Employee.create({
		name : req.body.name,
		salary : req.body.salary,
		age : req.body.age
	}, function(err, employee) {
		if (err) res.send("Not valid request");
		Employee.find(function(err, employees) {
			if (err) return res.send("Not valid request");
			res.json(employees);
		});
	});
});

app.put('/api/employees/:employee_id', function(req, res) {
	var id = req.params.employee_id;
	var data = {
		name : req.body.name,
		salary : req.body.salary,
		age : req.body.age
	}
	Employee.findByIdAndUpdate(id, data, function(err, employee) {
		if (err) return res.send("Not valid request");
	res.send('Successfully! Employee updated');
	});
});

app.delete('/api/employees/:employee_id', function(req, res) {
	var id = req.params.employee_id;
	Employee.remove({
		_id : id
	}, function(err) {
		if (err) return res.send("Not valid request");
		res.send('Successfully! Employee has been Deleted.');	
	});
});

app.listen(2000);
