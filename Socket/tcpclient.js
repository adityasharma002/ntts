var net = require('net');
var HOST = '127.0.0.1';
var PORT = 2000;

var client = new net.Socket();

client.connect(PORT, HOST, function(){
  console.log('CONNECTED '+ HOST + ':' + PORT);
  client.write("hello from client");
});


client.on('data', function(data){
console.log('DATA: '+data);
client.destroy();
});

client.on('close', function(){
  console.log('connection closed');
})