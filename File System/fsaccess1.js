var fs= require('fs');
var a= 'test1.txt';
fs.access(a, (err) => {
  if (err) {
    console.log('myfile does not exists');
    fs.writeFile(a, 'Hello World!', function (err) { 
      if (err)
console.log(err);
      else
console.log('Write operation complete.');
})
  }
  else{
    console.log('myfile exists');

  }
  
});