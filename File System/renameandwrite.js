var fs = require('fs');
var events= require('events');
var eventEmitter=new events.EventEmitter();

eventEmitter.on('event',function(){
    fs.rename('test.txt','test2.txt',(err)=>{
        if(err) throw err;
        console.log('rename complete');
        fs.writeFile('test2.txt','happy birthday', (err)=>{
            if(err) return console.error('some error');
            console.log('contents written');
            })
        })
       
});
eventEmitter.emit('event');