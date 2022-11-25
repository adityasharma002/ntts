var fs = require('fs');
fs.open('test.txt', 'r', function (err, fd) {
    if (err) return console.error(err);
        console.log('File opened');
        fs.read(fd,  function (err, bytesread, buffer) {
        if (err) console.error('Error in reading file');
        console.log(buffer.toString());
        console.log(bytesread);
        fs.close(fd, function (err) 
        {
        if (err) console.error('Error in closing file');
        console.log('file closed');
        });
    });
});


// var fs = require('fs');
// fs.open('test.txt', 'r', function (err, fd) {
//     if (err) return console.error(err);
//     console.log('File opened');
//     var buffr = new Buffer.alloc(1024);
//         fs.read(fd, buffr, 0, buffr.length, 2, function (err, bytesread, buffr) {
//         if (err) console.error('Error in reading file');
//         console.log(buffr.toString());
//         console.log(bytesread);
//         fs.close(fd, function (err) 
//         {
//         if (err) console.error('Error in closing file');
//         console.log('file closed');
//         });
//     });
// });



