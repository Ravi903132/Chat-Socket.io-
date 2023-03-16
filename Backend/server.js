const express = require('express')

const app = express();

const server= require('http').createServer(app);

const io= require('socket.io')(server,{
    cors:{
     origin:"*",
    },
});

io.on("connection", (socket)=>{

    console.log("what is socket: ", socket);
    console.log("Socket is active to be connected");

    socket.on("chat", (payload)=>{
        console.log("what is payload", payload);
        io.emit("chat",payload)
    });
});


server.listen(5000,()=>{
    console.log("server is running on port no 5000 ...");
});