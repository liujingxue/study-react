/**
 * Created by Administrator on 2018/5/9.
 */
const { Controller } = require('egg');
class UsersController extends Controller{
    async signup(){ //注册方法
        let {ctx} = this;
        //1.得到请求体 {username,password,email}
        //ctx.request.body 请求体
        //ctx.response.body 响应体  ctx.body = ctx.response.body 响应体
        let user = ctx.request.body;
        //使用用户模型 model目录下的User模型

        console.log(user);
        
        try{
            //保存数据库
            user = await ctx.model.User.create(user);  // User必须大写
            ctx.body = {
                code:0,
                data: { user }
            }
        }catch(error){
            ctx.body = {
                code:1,
                data: error
            }
        }
    }
}

module.exports = UsersController;