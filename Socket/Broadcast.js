var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile( __dirname + "/" + "Broadcast.html" ); 
});

var clients = 0;
io.on('connection', function(socket) {
   //try to use socket instead of io. You will see the difference that io.emit broadcasts to all clients but socket will emot to only specific clients
   clients++;
  io.emit('broadcast',{ msg: clients + ' clients connected!'});
   io.on('disconnect', function () {
      clients--;
      io.emit('broadcast',{ msg: clients + ' clients connected!'});
   });
});

http.listen(2000, function() {
   console.log('listening on localhost:2000');
});

