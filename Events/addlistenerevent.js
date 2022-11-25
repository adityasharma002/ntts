var event = require('events');   //events is a module and we require it

//create a variable myEmitter and create EventEmitter object and store it in myEmitter
var myEmitter = new event.EventEmitter(); 


/*create an event called anEvent and use a callback function with a parameter "msg",,, anEvent is the name of the 
event function(msg) is the listener*/

myEmitter.addListener('anEvent', function(msg)
{
//when we create the above event, watch the console display the message
console.log(msg);	 	
});

//Emit or raise the event
myEmitter.emit('anEvent', 'Event emitted');