let express = require('express')
let app = express()

app.get('/',(req,res)=>{
    res.end('home')
})

app.get('/login',(req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=utf8')
    res.end('login')
})

app.post('/login',(req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=utf8')
    res.end('post,login')
})

app.all('*',(req,res)=>{
    res.end('404')
})


app.listen(8099)