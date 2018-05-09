/**
 * Created by Administrator on 2018/5/9.
 */
const {Controller} = require('egg');
class HomeController extends Controller {
    async index(){ //定义一个index方法,因为是异步的，所以加上async
        //ctx是上下文对象,它里面有很多的属性和方法 .request .response
        //ctx=request+response
        this.ctx.body = 'hello js';    //ctx.body = ctx.response.body
    }
}
module.exports = HomeController;