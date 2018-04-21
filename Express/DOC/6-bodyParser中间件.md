
## bodyParser的作用是接收post传递过来的参数

```

```

## express搭建服务
```
let express = require('express')

```

## 路径参数路由
- 将匹配到的结果生成一个对象放到req.params上
```
app.get('/user/:id/name')
```

## req上的属性
```
req.params 路径参数
req.url 整个路径
req.path pathname路径
req.headers 请求头
req.method 请求的方法
req.query 获取请求的参数 问号后面的参数
```

## res新增的方法
```
    res.end()
    res.json()
    res.sendFile() 绝对路径 path.join/path.resolve
    res.sendStatus()
    res.send();
```

## 用户管理模块

* 登录    /login
* 注册    /reg
* 添加文章 /post
* 删除文章 /delete
