
## koa2是现在最流行的基于Node.js平台的web开发框架

安装

```
npm i koa
```

## 基础使用

```
const koa = require('koa')
const app = new koa()

app.use(async function(ctx,next){
    console.log(ctx.url)
    console.log('1')
    next()
})

app.use(async function(ctx,next){
    console.log('2')
})

app.listen(8099)

```