var net = require('net');
var server = net.createServer(function(socket){

  //try using socket.once also, then see the difference
  socket.on('data', function(data){
    socket.write('server reply '+data);
  })
})
server.listen(2000)