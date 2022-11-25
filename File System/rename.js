var fs = require("fs");  
fs.renameFile('myfile1.txt', 'myfile.txt', (err) => {
    if (err) return console.error('Not found')
  });