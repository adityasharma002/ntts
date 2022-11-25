var event = require('events');  
var fs = require("fs");  
const multiple = new event.EventEmitter();

multiple.on('myEvent', () => 
{
    fs.writeFileSync('test1.txt', 'Hello World!');
       
console.log('Write operation complete.');
});

multiple.on('myEvent', () =>
{
    fs.rename('test1.txt', 'test2.txt', (err) => {
        if (err) return console.error('Not found')
        console.log('file renamed successfully');
      });
} );
multiple.emit('myEvent');
