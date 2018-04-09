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
    console.log(limit,offset);
    let newLessons = lessons.filter(item=>{
        if(type === 0)return true;
        return item.type === type;
    })
    //这里面要判断一下 服务端是否有更多数据 hasMore
    let hasMore = true
    let len = newLessons.length; //获取数据的总长
    if(len<offset+limit){        //没有更多了
        hasMore = false
    }
    newLessons = newLessons.slice(offset,offset+limit) //获取的数据
    res.json({hasMore,list:newLessons})
})

app.listen(3000)

