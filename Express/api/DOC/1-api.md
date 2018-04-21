
## views文件夹用来放视图

path.join(__dirname,'../views/reg.html') 拼成的是绝对路径

E:\react\study-react\Express\api\views\reg.html


path.resolve('../views/reg.html') 拼成的路径

E:\react\study-react\Express\views\reg.html


## 没有使用bodyParser的时候

```

let express = require('express')
let router = express.Router() //创建一个路由池子

let path = require('path')

//router也是一个函数
router.get('/login',(req,res)=>{
    res.send('login')
})

router.get('/reg',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/reg.html'))
})

router.post('/reg',(req,res)=>{
    let str = ''
    req.on('data',(chunk)=>{
        str+=chunk
    })
    req.on('end',()=>{
        console.log(str) // username=admin&password=123456
        // username=admin&password=123456 变成对象
        /*let obj = {}
        str.replace(/([^&=]+)=([^&=]+)/g,()=> {
            obj[arguments[1]] = arguments[2]
        })
        console.log(obj)*/

        console.log(require('querystring').parse(str))  // { username: 'admin', password: '123456' }

    })
})

module.exports = router

```


## 使用中间件的写法

```
//1-Route.js

let express = require('express')
let app = express()

let user = require('./routes/user')
let article = require('./routes/article')

function bodyParser(){
    return function(req,res,next){
        let str = ''
        req.on('data',(chunk)=>{
            str += chunk
        })
        req.on('end',()=>{
            req.body = require('querystring').parse(str)
            next()
        })
    }
}
app.use(bodyParser())

// localhost:8099/user/login
app.use('/user',user)

// localhost:8099/article/post
app.use('/article',article)

app.listen(8099)


```

* 使用, bodyParser相当于自己写的中间件
```
router.post('/reg',(req,res)=>{
    console.log(req.body)
})

```