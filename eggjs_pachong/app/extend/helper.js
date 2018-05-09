/**
 * Created by Administrator on 2018/5/9.
 */

// 扩展

let moment = require('moment');
moment.locale('zh-cn'); //转成汉字

exports.relative = function(time){
    return moment(time).fromNow();
}