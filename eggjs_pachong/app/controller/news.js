/**
 * Created by Administrator on 2018/5/9.
 */
const {Controller} = require('egg');
class NewsController extends Controller{
    //一般来说控制器只会处理请求的参数，和返回响应
    async index(){
        let {ctx} = this;  // 代表上下文对象
        //后端渲染
        let news = await this.ctx.service.news.fetch(); //调用service下的news.js的方法
        console.log(news);
        await ctx.render('news.ejs',{news}); //渲染页面

    }
}
module.exports = NewsController;