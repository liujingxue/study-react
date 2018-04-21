let express = require('express')
let app = express()

app.get('/',(req,res)=>{
    res.setHeader('Location','http://www.baidu.com')
    res.statusCode = 302
    res.end()
    // res.redirect('http://www.baidu.com')
})

app.listen(8099)