let express = require('express')
let app = express()

//第一个参数表示只对'/user'路径生效
app.use('/user',(req,res,next)=>{ //不调用next,就不继续往下走
    console.log('过滤石头')
    req.stone = 'too big'
    next('错误')
})

app.use('/user',(req,res,next)=>{ //不调用next,就不继续往下走
    console.log('过滤沙子')
    req.sand = 'too small'
    next()
})

//两个都匹配
app.use((req,res,next)=>{
    res.header('Content-Type','text/plain;charset=utf8')
    next()
})

app.get('/user',(req,res)=>{
    console.log(req.stone,req.sand)   // too big  too small
    res.end('water')
})

app.get('/food',(req,res)=>{
    res.end('food')
})

//错误中间件,有四个参数
app.use((err,req,res,next)=>{
    console.log(err);
})


app.listen(8099)