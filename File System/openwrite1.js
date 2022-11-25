const fs=require("fs"); 
const str = "Hello world"; 
fs.open('test.txt', 'a', (err, fd)=>{ 
if(err) return console.error('There was an error in opening file');
    console.log('File opened');
    fs.write(fd, str, (err, bytes)=>{ 
    if(err) return console.error('There was an error in writing into the file');
    console.log(bytes +' bytes written'); 
    fs.close(fd, function (err) 
    {
    if (err) console.error('Error in closing file');
    console.log('File closed');
    });

    })         
}) 