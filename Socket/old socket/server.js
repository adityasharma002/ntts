const express = require('express');
const app = express();
const port = 3000;
const http = require("http").createServer();
const io=require("socket.io")(http);

io.on("connection",(socket)=>{
socket.emit("Welcome","Hello");
console.log("New client");
})

http.listen(port,()=>{
console.log("Server is listening on localhost "+port);

})