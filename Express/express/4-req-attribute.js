let express = require('express')
let app = express()

app.get('/user',(req,res)=>{
    console.log(req.query.id)
    console.log(req.url)
    console.log(req.path)
    console.log(req.headers)
    console.log(req.method)
})

app.listen(8099)