/*
7 — read, write, and execute
6 — read and write
5 — read and execute
4 — read only
3 — write and execute
2 — write only
1 — execute only
0 — no permission

The mode argument used in both the fs.chmod() and fs.chmodSync() methods is a numeric bitmask created using a logical OR of the following constants:
fs.constants.S_IRUSR	0o400	read by owner //'S' stands for 'status'
fs.constants.S_IWUSR	0o200	write by owner
fs.constants.S_IXUSR	0o100	execute/search by owner
fs.constants.S_IRGRP	0o40	read by group
fs.constants.S_IWGRP	0o20	write by group
fs.constants.S_IXGRP	0o10	execute/search by group
fs.constants.S_IROTH	0o4	read by others
fs.constants.S_IWOTH	0o2	write by others
fs.constants.S_IXOTH	0o1	execute/search by others

*/
const fs = require('fs'); 
fs.chmod('test.txt', 0o777, (err) => { // o is octal. It will work even if you don't use o.
  if (err) throw err;
  console.log('The permissions have been changed!');
});