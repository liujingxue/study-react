/**
 * Created by Administrator on 2018/5/9.
 */
const BaseController = require('./base');
class UsersController extends BaseController{
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
            this.success({user});
        }catch(error){
            this.error(error);
        }
    }

    async signin(){ //登录方法
        let {ctx} = this;
        let user = ctx.request.body; //得到请求体
        try{
            user = await ctx.model.User.findOne(user); //如果没有找到，返回null,如果找到，返回一个对象
            if(user){
                //如果登录成功了，则需要写入session会话
                //可以通过ctx.session.user是否为null来判断此用户是否登录
                ctx.session.user = user;
                this.success({user});
            }else{
                this.error('用户名或者密码错误!');
            }
        }catch(error){
            this.error(error);
        }
    }

}

module.exports = UsersController;