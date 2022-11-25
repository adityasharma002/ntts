const fs = require('fs')

try {
  fs.renameSync('myfile.txt', 'myfile1.text');
 
} catch (err) 
{
  console.error('not found');
}