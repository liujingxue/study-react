/**
 * Created by Administrator on 2018/5/9.
 */
//router其实就是路由中间件的router实例,可以在它身上定义路由规则
//controller控制器的容器
//app.get('/',function(){})
//get指的是HTTP的方法名
//1.controller={}
//2.得到HomeController,然后创建它的实例 let home = new HomeController()
//3.controller.home = home; index指的是home实例的方法。
module.exports = (app) =>{
    const {router,controller} = app;   //解构出router和controller
    router.get('/',controller.home.index);
    router.get('/news',controller.news.index);
}
