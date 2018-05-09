/**
 * Created by Administrator on 2018/5/9.
 */

// 判断浏览器

module.exports = (options,app) => {
    return async function(ctx,next){
        let userAgent = ctx.get('user-agent'); //得到的就是请求头中的User-Agent
        //let ua = [/Chrome/,/Firefox/];  //正则,Chrome和Firefox两个浏览器都不行
        let matched = options.uas.some(item=>item.test(userAgent)); //有一个不通过就不行
        if(matched){
            ctx.status = 403; //forbidden
            ctx.body = '无权访问';
        }else{ //其他浏览器,IE
            await next(); //往下走
        }
    }
}