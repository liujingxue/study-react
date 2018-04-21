
## 普通的原生写法

引入一个 html 文件

```
let express = require('express')
let app = express()

app.get('/index.html',(req,res)=>{
    res.sendFile('./static/index.html',{root:__dirname})
})

app.get('/index.css',(req,res)=>{
    res.sendFile('./static/index.css',{root:__dirname})
})

app.listen(8099)

```

## 自己写个静态服务中间件
```
let express = require('express')
let app = express()

let fs = require('fs')
function static(p){
    return function(req,res,next){
        let path = require('path').join(p,req.path) //我们要读取的文件
        fs.stat(path,(err,stats)=>{
            if(err){ //文件不存在
                return next()
            }
            if(stats.isFile()){
                fs.createReadStream(path).pipe(res)
            }
        })
    }
}
app.use(static('static')) // static表示文件夹
app.use(static('public')) // 另一个静态资源文件夹

// app.get('/index.html',(req,res)=>{
//     res.sendFile('./static/index.html',{root:__dirname})
// })
//
// app.get('/index.css',(req,res)=>{
//     res.sendFile('./static/index.css',{root:__dirname})
// })

app.listen(8099)

```


## express提供了一个静态资源服务器
```
app.use(express.static('static')) // static表示文件夹

```
