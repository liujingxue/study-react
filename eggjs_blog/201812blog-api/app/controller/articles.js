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
            let items = await ctx.model.Article.find(query)
                .skip((pageNum -1)*pageSize)
                .limit(pageSize);
            this.success({items});
        }catch(error){
            this.error(error);
        }
    }


    //新增文章
    async create(){
        let {ctx} = this;
        let article = ctx.request.body;  //得到请求体
        try{
            article = await ctx.model.Article.create(article);
            this.success('文章发布成功');
        }catch(error){
            this.error(error);
        }
    }
}
module.exports = ArticlesController;