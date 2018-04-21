
## ejs模板的使用

* 可以引入css
* ejs页面和html页面一样
* res.render()去渲染

```
let ejs = require('ejs')

// 使用
res.render('result.ejs',req.body)

// result.ejs页面

<%=username%>
<%=password%>

```

## 循环数组
```
res.render('result.ejs',{...req.body,arr:[1,2,3,4,5]})

// result.ejs页面

<%=username%>
<%=password%>

<%arr.forEach((item)=>{%>
    <li><%=item%></li>
<%})%>

<%arr.map((item)=>{%>
    <li><%=item+1%></li>
<%})%>

<%for(var i=0;i<arr.length;i++){%>
    <li><%=arr[i]%></li>
<%}%>

```

## 渲染html标签
```
res.render('result.ejs',{...req.body,arr:[1,2,3,4,5],html:'<h1>js</h1>'})

//页面
<%-html%>

```

## 引入其他模板
```
//页面
<%include header.ejs%>

```

## 希望使用.html后缀名的文件
让html模板以ejs的形式去渲染
```
let ejs = require('ejs')
//告诉他所有render方法中的html,都用ejs模板来渲染
app.engine('html',require('ejs').__express)

res.render('result.html',{...req.body,arr:[1,2,3,4,5],html:'<h1>js</h1>'})

```

## 希望把views文件夹名称改为 tpl
```
let ejs = require('ejs')
app.engine('html',require('ejs').__express)
//更改模板路径,默认叫views
app.set('views','tpl')            //把默认的模板文件夹views 改为 tpl

//加载页面
router.get('/reg',(req,res)=>{
    res.sendFile(path.join(__dirname,'../tpl/reg.html'))
})

```

## 加载的时候，去掉 .html后缀
```
//配置默认后缀名
app.set('view engine','html')      //设置模板引擎的后缀名为 .html

//加载页面
res.render('result',{...req.body,arr:[1,2,3,4,5],html:'<h1>js</h1>'})

```

## 在tpl文件夹里面再建个文件夹 component
```
//开头路径不能是 /component
res.render('component/result',{...req.body,arr:[1,2,3,4,5],html:'<h1>js</h1>'})

//页面中引入
<%include ./component/header.ejs%>

```