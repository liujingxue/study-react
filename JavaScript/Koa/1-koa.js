const koa = require('koa')
const app = new koa()

app.use(async function(ctx,next){
    console.log(ctx.url)
    console.log('1')
    await next()
    console.log('3')
})

app.use(async function(ctx,next){
    console.log('2')
})

app.listen(8099)