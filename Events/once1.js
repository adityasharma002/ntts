var event = require('events');  
const myEmitter = new event.EventEmitter();
let i = 0;
myEmitter.once('event', () => {
  console.log(++i);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Prints: 2