let express = require('express')
let app = express()

// http://localhost:8099/user/22/js
app.param('id',(req,res,next)=>{
    let str = `你的学号是${req.params.id}`;
    console.log(str)
    next()
})

app.param('name',(req,res,next)=>{
    let str = `你的姓名是${req.params.name}`
    console.log(str)
    next()
})

app.get('/user/:id/:name',(req,res)=>{
    res.header('Content-Type','text/plain;charset=utf8')
    res.end('this is user')
})

app.listen(8099)