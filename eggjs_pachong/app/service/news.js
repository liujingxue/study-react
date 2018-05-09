/**
 * Created by Administrator on 2018/5/9.
 */

const { Service } = require('egg');
class NewsService extends Service{
    //eggjs里内置了一个方法，用来读取远程的接口数据 this.ctx.curl
    //result = {headers,data,状态码}
    async fetch(){
        //调接口
        // this.config.news.url config属性是this的属性
        let {data} = await this.ctx.curl(this.config.news.url);
        data = data.toString();
        //把<a>标签提取出来
        let news = [];
        let reg = /<a href="(\/s\?id=[^"]+)".+>([\s\S]+?)<\/a>/g;
        data.replace(reg,(matched,url,title)=>{ //写个正则将<a>标签提取出来
            if(!title.includes('img') && !title.includes('查看详情'))
            news.push({
                title,
                url:'https://baijia.baidu.com'+url,
                // time:moment(new Date()).fromNow()
                // time: this.ctx.helper.relative(new Date())
                time:new Date()
            });
        });
        return news;
    }
}
module.exports = NewsService;