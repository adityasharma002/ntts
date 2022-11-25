var fs= require('fs');
try{
fs.copyFileSync('test.txt', 'test1.txt');
console.log('data copied');
}
catch(err){
    console.error('One of the file does not exists');
    }
