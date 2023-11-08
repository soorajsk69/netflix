const express = require('express')
const cors = require('cors')
const logic = require('./services/logic')

const server = express()
server.use(cors({
    origin:'http://localhost:3000'
}))
server.use(express.json())

server.listen(8000,()=>{
    console.log('Netflix server started at port number 8000 ');
})

// get-all-users
server.get('/get-all-users',(req,res)=>{
    logic.allusers()
    .then((result)=>{
        res.status(result.statuscode).json(result)
    })
})

//add-user
server.post('/add-users',(req,res)=>{
    logic.addUser(req.body.id,req.body.email,req.body.password)
    .then((result)=>{
        res.status(result.statuscode).json(result)
    })
})

