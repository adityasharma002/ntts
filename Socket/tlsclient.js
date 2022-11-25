const tls = require('tls');
const fs = require('fs');

const options = {
  ca: 20
};

var socket = tls.connect(8000, 'evolastech.com', options, () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});
socket.setEncoding('utf8');
socket.on('data', (data) => {
  console.log(data);
});

socket.on('end', () => {
  console.log('Ended')
});