//F_OK tests for the existence of the file. R_OK, W_OK, and X_OK test whether the file exists and grants read, write, and execute permissions, respectively.

const fs = require('fs'); 
fs.access('test.txt', fs.constants.R_OK | fs.constants.W_OK, (err) => {  
if (err) return console.error('No access'); 
	console.log('File can be read and written'); 
}); 

//This prgram is to check whether file exists or not
/*const fs = require('fs'); 
fs.access('test.txt', fs.constants.F_OK, (err) => {  
if (err) return console.error('does not exists'); 
	console.log('exists'); 
}); */


// const { F_OK, R_OK, W_OK } = require('constants');
// var fs = require('fs');
// fs.access('test1.txt', R_OK && W_OK, (err) => {
// if (err) return console.error('Permissions not granted');
// console.log('File has some permissions');
// })

//To check if a file is existing and then writing into a file
// var fs = require('fs');
// fs.access('test1.txt', (err)=>{
//     if(err) return console.error('No access/file not found');
//     // console.log('file is existing');
//     fs.writeFile('test1.txt', 'Lovely', (err)=>{
//         if(err) return console.error('Error in writing');
//         console.log('contents written');
//     })
// })