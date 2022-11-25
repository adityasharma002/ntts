var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
 
// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session.user === "nav")
  {
    next();
  }
  else
  {
    res.send("unauthorized");
  }
};
 
// Login endpoint
app.get('/login', function (req, res) {
  if (req.query.username!="nav" || req.query.password!="kaur") {
    res.send('login failed');    
  } 
  else if(req.query.username === "nav" && req.query.password === "kaur") 
  {
    req.session.user = "nav";
    //req.session.admin = true;
    res.send("login success!");
  }
  
});
 
// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});
 
// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});
 
app.listen(2000);
console.log("app running at http://localhost:2000");


// Visit these urls in a browser
// localhost:3000/content
// localhost:3000/login?username=nav&password=kaur
// localhost:3000/content
// localhost:3000/logout
// localhost:3000/content

// Visit these urls in a browser
// localhost:3000/content
// localhost:3000/login?username=amy&password=amyspassword
// localhost:3000/content
// localhost:3000/logout
// localhost:3000/content