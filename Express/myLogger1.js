var express = require('express')
var app = express()

var authentication = function (req, res, next) {
 if(req.query.admin ==='true'){      //check for      http://localhost:3000/user?admin=true
   next();
 }
 else{
   res.send('No authentication');
 }
}
// app.use(authentication) // middleware can be used this way as well but then remove from the below code
app.get('/user', authentication, function (req, res) {
  console.log('Hello world')
  res.send('Hello World!')
})

app.listen(3000)