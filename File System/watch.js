var fs = require('fs');
fs.watch('test.txt', ()=>{
console.log('file changed');

});