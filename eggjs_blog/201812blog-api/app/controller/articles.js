/**
 * Created by Administrator on 2018/5/10.
 */
let BaseController = require('./base');
class ArticlesController extends BaseController{
    //查看文章列表
    async index(){
        let {ctx} = this;
        let {pageNum=1,pageSize=5,keyword=''} = ctx.query;
        pageNum = isNaN(pageNum)? 1:parseInt(pageNum);    //如果不是数字，则为默认值1
        pageSize = isNaN(pageSize) ? 5:parseInt(pageSize);
        let query = {};
        if(keyword){
            //或，有一个满足条件就行
            query['$or'] = [{title:new RegExp(keyword)}, {content:new RegExp(keyword)}];
        }

        try{
            let total = await ctx.model.Article.count(query); //总条数
            let items = await ctx.model.Article.find(query)
                .skip((pageNum -1)*pageSize)
                .limit(pageSize);
            this.success({
                pageNum,
                pageSize,
                items,
                total,
                pageCount:Math.ceil(total/pageSize) //总页数, Math.ceil向上取整
            });
        }catch(error){
            this.error(error);
        }
    }


    //新增文章
    async create(){
        let {ctx} = this;
        let article = ctx.request.body;  //得到请求体
        article.user = this.user; //调用父类的user方法， 得先登录，才有session中的user信息
        try{
            article = await ctx.model.Article.create(article);
            this.success('文章发布成功');
        }catch(error){
            this.error(error);
        }
    }

    //更新文章
    async update(){
        let {ctx} = this;
        let id = ctx.params.id;
        let article = ctx.request.body;
        try{
            await ctx.model.Article.findByIdAndUpdate(id, article);
            this.success('更新文章成功');
        }catch(error){
            this.error(error);
        }
    }

    //删除文章
    async destroy(){
        let {ctx} = this;
        let id = ctx.params.id;  //得到URL中的参数
        try{
            //findByIdAndRemove 通过id找到并删除
            let result = await ctx.model.Article.findByIdAndRemove(id);
            this.success('删除成功');
        }catch(error){
            this.error(error);
        }
    }

    //增加页面访问量
    async addPv(){
        let {ctx} = this;
        let id = ctx.params.id;
        try{
            await ctx.model.Article.findByIdAndUpdate(id,{$inc:{pv:1}}); //$inc是把pv这个字段，加1
            this.success('增加pv成功');
        }catch(error){
            this.error(error);
        }
    }

    //增加评论
    async addComment(){
        let {ctx} = this;
        let id = ctx.params.id;
        let comment = ctx.request.body;
        comment.user = this.user;
        try{
            await ctx.model.Article.findByIdAndUpdate(id,{$push : {comments:comment}}); //$push是新增
            this.success('增加评论成功');
        }catch(error){
            this.error(error);
        }
    }

}
module.exports = ArticlesController;