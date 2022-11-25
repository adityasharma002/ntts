var fs = require('fs');
fs.unlink('test1.txt', function () 
{
    console.log('file deleted successfully');
});


//can be handled this way by passing an argument in the callback function which is always reserved
var fs = require('fs');
fs.unlink('myfile1.txt', function (err) {
    if (err) return console.error('Not found');
    console.log('Delete operation complete.');

});