

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
* 一个数据库文档对应一个模型,通过模型对数据库进行操作

Mongoose文档类型

* String,Number等数据类型
* create,remove,update分别用来增、删、改的操作
* find和findOne用来查询数据

```
//使用mongoose

//server.js

const express = require('express')
const mongoose = require('mongoose')

//连接mongo,并且使用boss这个集合,没有的话,会自动新建
const DB_URL = 'mongodb://localhost:27017/boss'
mongoose.connect(DB_URL)
//连接成功
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

//新建
User.create({
    user:'js',
    age:18
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})



//新建app
const app = express()

app.get('/',function(req,res){
    res.send('<h2>hello</h2>')
})

app.get('/data',function(req,res){
    //查询数据
    User.find({},function(err,doc){
        res.json(doc)
    })
})

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})

```

## 删除数据

```
//server.js

const express = require('express')
const mongoose = require('mongoose')

//连接mongo,并且使用boss这个集合,没有的话,会自动新建
const DB_URL = 'mongodb://localhost:27017/boss'
mongoose.connect(DB_URL)
//连接成功
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

//新建
// User.create({
//     user:'js',
//     age:18
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

//删除数据
User.remove({age:18},function(err,doc){
    console.log(doc);
})


//新建app
const app = express()

app.get('/',function(req,res){
    res.send('<h2>hello</h2>')
})

app.get('/data',function(req,res){
    //查询数据
    User.find({},function(err,doc){
        res.json(doc)
    })
})

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})


```

## 更新数据

```
//server.js

const express = require('express')
const mongoose = require('mongoose')

//连接mongo,并且使用boss这个集合,没有的话,会自动新建
const DB_URL = 'mongodb://localhost:27017/boss'
mongoose.connect(DB_URL)
//连接成功
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

//新建
// User.create({
//     user:'js',
//     age:18
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

//删除数据
// User.remove({age:18},function(err,doc){
//     console.log(doc);
// })

//更新数据
User.update({'user':'js'},{'$set':{age:16}},function(err,doc){
    console.log(doc);
})
//新建app
const app = express()

app.get('/',function(req,res){
    res.send('<h2>hello</h2>')
})

app.get('/data',function(req,res){
    //查询数据
    User.find({},function(err,doc){
        res.json(doc)
    })
})

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})

```

## 查找对应的数据

```
//查询数据
User.find({user:'js'},function(err,doc){
    res.json(doc)
})

//只查找一条
User.findOne({user:'js'},function(err,doc){
    res.json(doc)
})

```