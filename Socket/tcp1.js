var net = require('net');
var server = net.createServer(function(socket){
socket.write("hello");
socket.on("data", function(data){
  console.log(data.toString());
})

})
server.listen(2000)