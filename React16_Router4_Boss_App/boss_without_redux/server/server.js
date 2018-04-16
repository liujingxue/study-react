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
// User.update({'user':'js'},{'$set':{age:16}},function(err,doc){
//     console.log(doc);
// })

//新建app
const app = express()

app.get('/',function(req,res){
    res.send('<h2>hello</h2>')
})

app.get('/data',function(req,res){
    //查询数据
    User.find({user:'js'},function(err,doc){
        res.json(doc)
    })
})

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})