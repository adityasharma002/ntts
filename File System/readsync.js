var fs = require('fs');
var data = fs.readFileSync('dreamweaver license.txt');
console.log(data.toString());


//can also be handed this way that is using try and catch
var fs = require('fs');
try{
var data = fs.readFileSync('dreamweaver license.txt');
console.log(data.toString());
}
catch(err){
console.error('File not found');
}
