

## Express+mongodb开发web后台接口

* Express开发web接口
* 非关系型数据库mongodb
* 使用nodejs的mongoose模块链接和操作mongodb

## Express

基于nodejs,快速、开放、极简的web开发框架

* npm i express --save安装express
* src目录一般放置前端源码,server目录一般写接口
* 监听路由和响应内容,使用nodemon自动重启,npm i -g nodemon

```
//最简单例子

//server.js

const express = require('express')
//新建app
const app = express()

app.get('/',function(req,res){
    res.send('<h2>hello</h2>')
})

app.get('/data',function(req,res){
    res.json({name:'hello',type:'1'})
})

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})

//运行
//cd server
//node server.js
//浏览器打开localhost:9093

```

## 使用nodemon

安装

* npm i -g nodemon

使用

* cd server
* nodemon server.js

## 其他的特性

* app.get、app.post分别开发get和post接口
* app.use使用模块
* res.send、res.json、res.sendfile响应不同的内容


## MongoDB

* 官网:https://www.mongodb.com 下载安装mongodb
* npm i mongoose --save 安装mongoose
* 通过mongoose操作mongodb,存储的是json,相对mysql来说,要易用很多

## Mongoose基础使用

* Connect连接数据库
* 定义文档模型,Schema和model新建模型


```
//使用mongoose

```