var fs= require('fs');
fs.access('test.txt', (err) => {
  if (err) {
    console.log('myfile does not exists');
    return;
  }
  console.log('myfile exists');
});