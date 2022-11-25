var fs = require('fs');
fs.open('test.txt', 'a', function (err, fd) {
    if (err) return console.error('There was an in opening the file');
    console.log('File opened');
     // const buffer=new Buffer.alloc(9,'hey there'); 
    let buffer = new Buffer.from('hello hey there'); 
    fs.write(fd, buffer, 3, 5, null, function(err,byteswritten) {
        if (err) return console.error('There was an error in writing into the file');
        console.log('Write complete, bytes written are : '+byteswritten);
        fs.close(fd, function (err) 
        {
        if (err) console.error('Error in closing file');
        console.log('File closed');
        });
    });
});
