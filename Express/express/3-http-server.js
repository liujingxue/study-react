let express = require('express')
let app = express()

app.get('/',(req,res)=>{
    res.end('home')
})

app.listen(8099)