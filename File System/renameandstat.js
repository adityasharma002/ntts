//To correctly order the operations, move the fs.stat() call into the callback of the fs.rename() operation:
var fs = require("fs");  
fs.rename('myfile1.txt', 'myfile.txt', (err) => {
    if (err) return console.error('Not found');
    fs.stat('myfile.txt', (err, stats) => {
      if (err) return console.error('Error in retrieving stats');
      console.log(stats);

  });

  });

  // Renamesync can also be used
  var fs = require("fs");  
fs.renameSync('myfile1.txt', 'myfile.txt');
fs.stat('myfile.txt', (err, stats) => {
    if (err) return console.error('Not found');
    console.log(stats);
  });

  