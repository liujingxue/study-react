let express = require('express')
let session = require('express-session')
let bodyParser = require('body-parser')
let app = express()

app.use(session({
    resave:true,             //是否重新保存session
    saveUninitialized:true,  //保存未初始化的session
    secret:'zfpx'            //密钥
}))

app.use(bodyParser.json())

//node express 跨域
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:8080");
    res.header("Access-Control-Allow-Credentials",true)        //允许携带cookie跨域
    res.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Requested-With")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By",'3.2.1')
    if(req.method=="OPTIONS")res.sendStatus(200); /*让options请求快速返回*/
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
        if(type === '0')return true;
        return item.type === type;
    })
    // console.log(newLessons);
    //这里面要判断一下 服务端是否有更多数据 hasMore
    let hasMore = true
    let len = newLessons.length; //获取数据的总长

    if(len<offset+limit){        //没有更多了
        hasMore = false
    }
    newLessons = newLessons.slice(offset,offset+limit) //获取的数据
    res.json({hasMore,list:newLessons})
})


//登录接口
let users = [];  //存放所有用户
//返回的参数 {msg:'xxx',err:1,user:{username,password}}
app.post('/login',function(req,res){
    let {username,password} = req.body //获取登录的用户名和密码
    let user = users.find(item=>(item.username == username)&&(item.password==password))
    if(user){ //用户已经找到了
        req.session.user = req.body   //存入session
        res.json({msg:'用户成功登录',err:0,user:username})
    }else{
        res.json({msg:'用户名或密码不正确',err:1})
    }
})

//注册接口
app.post('/reg',function(req,res){
    let {username,password} = req.body
    let user = users.find(item=>item.username == username)
    if(user){ //已经存在这样一个用户
        res.json({mas:'用户已经存在',err:1})
    }else{
        users.push({username,password})
        res.json({msg:'注册成功',err:0})
    }
})



app.listen(3000)

