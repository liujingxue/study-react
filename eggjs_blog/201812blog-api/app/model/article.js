/**
 * Created by Administrator on 2018/5/10.
 */

//app代表应用对象

module.exports = app => {
    //先得到mongoose的模块，通过它可以定义骨架模型和model
    let mongoose = app.mongoose;
    //先定义Schema, 通过它可以定义集合里文档的属性名和类型
    let Schema = mongoose.Schema;
    //外键
    const ObjectId = Schema.Types.ObjectId;
    //用户集合的模型骨架，它不连接数据库也不能操作数据
    let ArticleSchema = new Schema({
        title:{type:String, required: true},  //标题
        content:{type:String, required:true}, //正文
        user:{ //作者
            type:ObjectId,
            ref: 'User' //引用的是User模型， 关联User模型
        },
        pv:{type:Number, default:0},  //页面的访问量
        comments:[  //评论
            {user:{type:ObjectId, ref:'User'}, content: String , createAt:{ type:Date, default: Date.now } }
        ],
        createAt:{ type:Date, default: Date.now },  //创建时间，默认为当前时间
    });
    //返回了一个用户模型，用户模型是可以对数据库进行增删改查的
    return mongoose.model('Article',ArticleSchema);
}