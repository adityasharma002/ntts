var event = require('events');  
const myEmitter = new event.EventEmitter();
myEmitter.on('event', function(msg) {
  console.log(msg);
});
myEmitter.emit('event');