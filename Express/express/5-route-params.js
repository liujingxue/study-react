let express = require('express')
let app = express()

app.get('/user',(req,res)=>{
    res.end('select all')
})

//id是占位符
app.get('/user/:id',(req,res)=>{
    res.end('select one')
})

//多个参数
//http://localhost:8099/product/1/22  => {id:1,name:2} = params
app.get('/product/:id/:name',(req,res)=>{
    console.log(req.params.id)    //1
    console.log(req.params.name)  //22
    res.end('product')
})

let url1 = '/user/3/5/a';
let url2 = '/user/:id/:name/a';
let newReg = url2.replace(/:[^\/]+/g,()=>{   //将url2转化成一个可以匹配url的正则
  return '[^\/]+'
})
let reg = new RegExp(newReg)
console.log(reg.test(url1))   //true

app.listen(8099)