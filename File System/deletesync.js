const fs = require('fs');
try {
  fs.unlinkSync('myfile.txt');
  console.log('successfully deleted');
} 
catch (err) 
{
  console.error('Does not exists');
}