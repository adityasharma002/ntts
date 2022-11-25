const io = require("socket.io-client");
let socket = io.connect("http://localhost:3000");

socket.on("Welcome",(data)=>{
    console.log("Received: ", data);
})