
## 提供了很多功能

* 路由控制
* 参数获取
* 中间件
* send和sendFile
* 静态文件服务
* 模板解析
* 重定向


## 安装

```
yarn add ejs body-parser express
npm i ejs body-parser express
```


## 原生Node.js写http-server

```

let http = require('http')

//1.当访问 /login 返回登录
//2.当访问 /reg 返回注册
//3.当访问其他时，返回404
let url = require('url')
http.createServer((req,res)=>{
    //路由:根据不同的路径返回不同的内容
    let {pathname,query} = url.parse(req.url,true)
    if(pathname === '/login'){
        res.setHeader('Content-Type','text/plain;charset=utf8')
        res.end('login')
    }
    if(pathname === '/reg'){
        res.setHeader('Content-Type','text/plain;charset=utf8')
        res.end('reg')
    }
    res.end('404')
}).listen(8088)

```

## 使用express写http-server

```
let express = require('express')
let app = express()

app.get('/',(req,res)=>{
    res.end('home')
})

app.get('/login',(req,res)=>{
    res.end('login')
})

app.get('/reg',(req,res)=>{
    res.end('reg')
})

app.listen(8099)

```
