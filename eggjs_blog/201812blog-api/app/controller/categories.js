/**
 * Created by Administrator on 2018/5/10.
 */
let BaseController = require('./base');
class CategoriesController extends BaseController{
    //查看分类列表
    async index(){
        let {ctx} = this;
        // /categories?pageNum=1&pageSize=5&keyword=a    ctx.query或者ctx.request.query都可以得到URL的请求参数
        let {pageNum=1,pageSize=5,keyword} = ctx.query;   //将URL的请求参数解构出来，并赋予默认值
        pageNum = isNaN(pageNum)? 1:parseInt(pageNum);    //如果不是数字，则为默认值1
        pageSize = isNaN(pageSize) ? 5:parseInt(pageSize);
        let query = {};
        if(keyword){
            //过滤name属性
            query.name = new RegExp(keyword);
        }

        try{
            //skip()是跳过多少条数据
            //limit()是限定返回多少条数
            let items = await ctx.model.Category.find(query)
                .skip((pageNum -1)*pageSize)
                .limit(pageSize);
            this.success({items});
        }catch(error){
            this.error(error);
        }
    }

    //增加文章分类
    async create(){
        let {ctx} = this;
        let category = ctx.request.body; //得到请求体
        try{
            let doc = await ctx.model.Category.findOne(category);
            if(doc){
                this.error('此分类已经存在!');
            }else{
                doc = await ctx.model.Category.create(category);
                this.success('保存分类成功');
            }
        }catch(error){
            this.error(error);
        }
    }

    //更新文章分类
    async update(){
        let {ctx} = this;
        let id = ctx.params.id;  //得到URL中的参数
        let category = ctx.request.body;  //{name:new}
        try{
            //findByIdAndUpdate 通过id找到并更新
            let result = await ctx.model.Category.findByIdAndUpdate(id, category);
            this.success('更新成功');
        }catch(error){
            this.error(error);
        }
    }

    //删除文章分类
    async destroy(){
        let {ctx} = this;
        let id = ctx.params.id;  //得到URL中的参数
        try{
            //findByIdAndRemove 通过id找到并删除
            let result = await ctx.model.Category.findByIdAndRemove(id);
            this.success('删除成功');
        }catch(error){
            this.error(error);
        }
    }


}
module.exports = CategoriesController;