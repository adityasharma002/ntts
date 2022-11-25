var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
   secret: "cookie",
   resave: true,
   saveUninitialized: true,
   cookie: { maxAge: 30000 } // this is in milliseconds. 30000 is equivalent to 30 seconds(half a minute)
}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("No. of visits "+ req.session.page_views);
   } else {
      req.session.page_views = 1;
      res.send("You are a first time visitor");
   }
});
app.listen(2000);