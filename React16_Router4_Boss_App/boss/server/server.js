const express = require('express')
const mongoose = require('mongoose')

//连接mongo,并且使用boss这个集合,没有的话,会自动新建
const DB_URL = 'mongodb://localhost:27017/boss'
mongoose.connect(DB_URL)
//连接成功
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

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