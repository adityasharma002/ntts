var net = require('net');
port= 2000

const client = net.createConnection(port, function(){
client.write('hello');
})

client.on('data', function(data){
   console.log(data.toString());
   client.end();
})