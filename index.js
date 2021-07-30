const express = require('express');
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')

const app = express();
const server = http.createServer(app)
const io = socketio(server, {
    cors: {
        origins: ["*"]
    }
})


//middleware
app.use(express.json())
app.use(cors());



io.on('connection', socket => {
    console.log('new Connection', socket.id)
    app.post('/lipanamobile', (req, res) => {
        if (req.body.Body.stkCallback.ResultCode === 0) {
            io.emit('metaData', req.body.Body.stkCallback)
            console.log(req.body.Body.stkCallback.CallbackMetadata.Item)
            
        }
        else {
            io.emit('metaData', req.body.Body.stkCallback)
            console.log(req.body.Body)
        }

    })
    app.post('/ResultURL',(req,res)=>{
        console.log(req.body)
    })
    app.post('/QueueTimeOutURL',(req,res)=>{
        console.log(req.body)
    })
})


server.listen('4000', () => console.log('SERVER UP ON PORT 4000'))