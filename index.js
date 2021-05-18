const express = require('express');
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')

const app = express();
const server = http.createServer(app)
const io = socketio(server,{
    cors:{
        origins:["*"]
    }
})


//middleware
app.use(express.json())
app.use(cors());

app.post('/lipanampesa', (req, res) => {
        if (req.body.Body.stkCallback.ResultCode === 0) {
            io.sockets.emit('metaData',req.body.Body.stkCallback)
            console.log(req.body.Body.stkCallback.CallbackMetadata.Item)
            console.log(`KSH${req.body.Body.stkCallback.CallbackMetadata.Item[0].Value} received from ${req.body.Body.stkCallback.CallbackMetadata.Item[3].Value}`)
        }
        else{
            io.sockets.emit('metaData',req.body.Body.stkCallback)
            console.log(req.body.Body)
        } 
    
})

io.on('connection',socket=>{
    console.log('new Connection')
})


server.listen('4000',()=>console.log('SERVER UP ON PORT 4000'))