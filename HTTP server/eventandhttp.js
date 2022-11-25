const http = require('http');
const events = require('events');

// declare server variables
const hostname = '127.0.0.1';
const port = 8000;

//create an object of EventEmitter class from events module
const myEmitter = new events.EventEmitter();


const server = http.createServer((req, res) => {

myEmitter.on('ping', function (data) {
    console.log('First event: ' + data);
 });

 myEmitter.emit('ping', 'My first Node.js event has been triggered.');
    
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});