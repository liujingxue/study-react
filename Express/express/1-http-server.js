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