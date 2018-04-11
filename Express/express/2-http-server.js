let express = require('express')
let app = express()

app.get('/',(req,res)=>{
    res.end('home')
})

app.get('/login',(req,res)=>{
    res.end('login')
})

app.get('/reg',(req,res)=>{
    res.end('reg')
})

app.listen(8099)