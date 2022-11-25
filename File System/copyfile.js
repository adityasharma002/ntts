var fs= require('fs');
fs.copyFile('test.txt', 'test1.txt', function (err) { 
if (err) return console.log('One of the files does not exists');
console.log('data copied');
})


  