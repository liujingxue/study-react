let express = require('express')
let app = express()

//node express 跨域
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Requested-With")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By",'3.2.1')
    if(req.method=="OPTIONS")res.send(200); /*让options请求快速返回*/
    else next();
})
let sliders = require('./mock/sliders')
let lessons = require('./mock/lessons')
app.get('/sliders',function(req,res){
    res.json(sliders);
})

//获取课程列表接口 http://localhost:3000/lessons?limit=5&offset=0&type=1
app.get('/lessons',function(req,res){
    let {limit,offset,type} = req.query
    limit = parseInt(limit)
    offset = parseInt(offset)
    lessons.filter(item=>{
        if(type === 0)return true;

    })
})

app.listen(3000)

