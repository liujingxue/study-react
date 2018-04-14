let express = require('express')
let app = express()


app.use((req,res,next)=>{ //不调用next,就不继续往下走
    console.log('过滤石头')
    req.stone = 'too big'
    next()
})

app.use((req,res,next)=>{ //不调用next,就不继续往下走
    console.log('过滤沙子')
    req.sand = 'too small'
    next()
})

app.get('/user',(req,res)=>{
    console.log(req.stone,req.sand)   // too big  too small
    res.end('water')
})


app.listen(8099)