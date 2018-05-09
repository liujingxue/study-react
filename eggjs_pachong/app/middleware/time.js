/**
 * Created by Administrator on 2018/5/9.
 */

//不管是express还是koa, 中间件导出的都是函数, 为了传参
module.exports = (options,app) => {
    return async function(ctx,next){ //ctx是上下文,next是执行下一层中间件
        const start = Date.now();
        await next(); //执行下一层中间件
        console.log(options.prefix + (Date.now() - start) + 'ms');
    }
}