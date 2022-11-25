const zlib = require('zlib'); 

const input = zlib.createGzip(); 
const output = zlib.createGunzip(); 

input.pipe(output); 

input.write('GeeksforGeeks'); 

input.flush(); 
//input.close(); 

output.on('data', (d) => { 
	console.log('Input: Data flush received '+ d.length + ' bytes'); 
}); 

//console.log('closed');