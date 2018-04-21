let express = require('express')
let router = express.Router() //创建一个路由池子

//router也是一个函数
router.get('/post',(req,res)=>{
    res.send('post')
})

router.get('/delete',(req,res)=>{
    res.send('delete')
})

module.exports = router