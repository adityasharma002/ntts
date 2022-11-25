var event = require('events');  
const multiple = new event.EventEmitter();
multiple.on('myEvent', () => 
{
    console.log('1st listener');
});
multiple.on('myEvent', () =>
{
    console.log('2nd listener');
} );
multiple.emit('myEvent');