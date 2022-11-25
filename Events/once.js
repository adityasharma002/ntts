const events = require('events')
const eventEmitter = new events.EventEmitter();

/*eventEmitter.on("myEvent", () => {
    console.log("ON");
    
});*/

eventEmitter.once("myEvent", ()=> {
    console.log("ONCE");
});

eventEmitter.emit("myEvent");
eventEmitter.emit("myEvent");
eventEmitter.emit("myEvent");