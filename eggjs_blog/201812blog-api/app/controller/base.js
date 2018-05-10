/**
 * Created by Administrator on 2018/5/10.
 */

const {Controller} = require('egg');
class BaseController extends Controller{
    success(data){
        this.ctx.body = {
            code:0,
            data
        }
    }
    error(error){
        console.error(error);
        this.ctx.body = {
            code:1,
            error
        }
    }
}
module.exports = BaseController;