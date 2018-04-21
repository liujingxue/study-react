let express = require('express')
let app = express()

let user = require('./routes/user')
let article = require('./routes/article')

let ejs = require('ejs')
let bodyParser = require('body-parser')

//解析表单格式，把表单内的数据，解析后放在req.body上
app.use(bodyParser.urlencoded({extended:false}))
//解析json格式，把json字符串转化成对象，解析后放在req.body上
app.use(bodyParser.json())

app.engine('html',require('ejs').__express)
//更改模板路径,默认叫views
app.set('views','tpl')
//配置默认后缀名
app.set('view engine','html')

// localhost:8099/user/login
app.use('/user',user)

// localhost:8099/article/post
app.use('/article',article)


app.listen(8099)