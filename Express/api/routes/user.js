let express = require('express')
let router = express.Router() //创建一个路由池子

let path = require('path')

//router也是一个函数
router.get('/login',(req,res)=>{
    res.send('login')
})

router.get('/reg',(req,res)=>{
    res.sendFile(path.join(__dirname,'../tpl/reg.html'))
})

router.post('/reg',(req,res)=>{
    res.render('result',{...req.body,arr:[1,2,3,4,5],html:'<h1>js</h1>'})
})

module.exports = router