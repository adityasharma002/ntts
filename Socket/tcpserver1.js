const net = require('net');

const server = net.createServer(function(conn){
   console.log('new client');

conn.on('data', function(data){
   conn.write(data);
});

conn.on('end',function(){
console.log('client left');

})
})
server.listen(2000)