/*The eventEmitter.on() method is used to register listeners, while the eventEmitter.emit() method is used to 
trigger the event*/

// var events = require('events');   
// var eventEmitter = new events.EventEmitter();

// eventEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// eventEmitter.emit('event');


//Understanding emitter.listeners(event)
var events = require('events');   
var eventEmitter = new events.EventEmitter();

var cb = () => {
  console.log('an event occurred!');
}
eventEmitter.on('event', cb);
console.log(eventEmitter.listeners('event'));

eventEmitter.emit('event');