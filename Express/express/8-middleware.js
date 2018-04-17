let express = require('express')
let app = express()

app.use((req,res,next)=>{
    let t = new Date().getTime() //访问最初的时间
    let end = res.end;
    res.end = function(...arg){
        console.log(new Date().getTime() - t);
        end.call(res,...arg)
    }
    next()
})

app.get('/water',(req,res)=>{
    for(let i=0;i<100;i++){
    }
    res.end('water') //装饰模式
})

app.get('/food',(req,res)=>{
    for(let i=0;i<100000;i++){
    }
    res.end('food')
})


app.listen(8099)