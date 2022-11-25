var express = require('express');
var app = express();

app.get('/:name', function(req, res){
   res.send('Your name is ' + req.params.name);
});
app.listen(3000);


/*var express = require('express');
var app = express();

app.get('/apply/:firstname/:lastname', function(req, res) {
   res.send('firstname: ' + req.params.firstname + ' and lastname: ' + req.params.lastname);
});
app.listen(3000);*/