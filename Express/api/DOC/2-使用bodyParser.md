
## 使用bodyParser

bodyParser.urlencoded({extended:false}) 会自动将请求头的表单格式进行转化

app.use(bodyParser.urlencoded({extended:false}))  // 接受表单元素
app.use(bodyParser.json())         //接受请求头传过来的json格式的数据

```

let bodyParser = require('body-parser')
//解析表单格式，把表单内的数据，解析后放在req.body上
app.use(bodyParser.urlencoded({extended:false}))
//解析json格式，把json字符串转化成对象，解析后放在req.body上
app.use(bodyParser.json())

```


## 结果页

```
router.post('/reg',(req,res)=>{
    res.send(req.body)
})

```
