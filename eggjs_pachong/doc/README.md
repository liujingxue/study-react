
## egg.js+ antdesgin   express

www.zhufengpeixun.cn/plan/html/31.egg-1.html

## egg.js

egg.js是基于koa封装的一个上级框架，底层是由koa实现的

## 2.初始化项目

```
mkdir egg-news
cd egg-news
npm init -y
cnpm i egg --save
cnpm i egg-bin --save-dev

```

npm init -y
npm i egg --save          // 上线也需要,所以用--save
npm i egg-bin --save-dev  // --save-dev是开发依赖, 可以简写成-D

## 3.添加npm scripts 到package.json

```
"scripts":{
    "dev":"egg-bin dev"    // 启动开发模式
}

```

npm run dev

## 4.跑通路由

```
|--app                    //项目源码
    |-router.js           //路由
    |--controller
        |-news.js
|--config
    |-config.default.js   //配置文件
|-package.json

```

### 4.1配置路由

app/router.js

```
module.exports = (app) =>{
    const {router,controller} = app;   //解构出router和controller
    router.get('/',controller.home.index);
}

```

### 4.2编写控制器

app/controller/home.js

```
const {Controller} = require('egg');
class HomeController extends Controller {
    async index(){
        this.ctx.body = 'hello js';
    }
}
module.exports = HomeController;

```

### 4.3编写配置文件

启动 npm run dev

http://127.0.0.1:7001/

报错500, Please set config.keys first

```
exports.keys = 'zfpx';   //作用是加密cookie的

```

刷新页面,就OK


## 5.静态文件中间件

* Egg内置了static插件
* static插件默认映射 /public/ -> app/public/目录
* 把静态资源都放到 app/public目录即可
* bootcss4
* bootstrap4

## 6.使用模板引擎

```
|--app                    //项目源码
    |-router.js           //路由
    |--controller
        |-news.js
    |--public
        |--css
    |--view
        |-news.ejs
|--config
    |-config.default.js   //配置文件
    |-plugin.js
|-package.json

```

### 6.1安装依赖的插件

```
cnpm i egg-view-ejs --save

```

npm i egg-view-ejs --save

### 6.2启用插件

{ROOT}/config/plugin.js

```
exports.ejs = {
    enable:true,
    package:'egg-view-ejs'
}

```

### 6.3配置模板

{ROOT}/config/config.default.js

```
exports.view = {
    defaultViewEngine:'ejs',
    mapping:{
        '.ejs':'ejs'
    }
}

```

### 6.4编写模板

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/public/css/bootstrap.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>百度新闻列表</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <div class="card">
                    <div class="card-header">
                        百度新闻列表
                    </div>
                    <div class="card-block">
                        <ul class="list-group">
                            <%news.forEach(item=>{ %>
                                <li class="list-group-item">
                                    <a href="<%=item.url%>">
                                        <%=item.name%>
                                    </a>
                                </li>
                                <%})%>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

```

### 6.5编写控制器

```
const { Controller } = require('egg');
class NewsController extends Controller {
    async index() {
        const news = [
            {
                name: '魅族：高不成、低不就 15系列的求变生存恐怕不易',
                url: 'https://baijia.baidu.com/s?id=1599513253231710086&wfr=pc&fr=idx_lst'
            },
            {
                name: '从应届技术男到百度VP，这是低调到没百科的吴海锋首次受访',
                url: 'https://baijia.baidu.com/s?id=1599508189171446369&wfr=pc&fr=idx_lst'
            }
        ]
        await this.ctx.render('news.ejs', { news });
    }
}
module.exports = NewsController;

```

```

const {Controller} = require('egg');
class NewsController extends Controller{
    async index(){
        let {ctx} = this;  // 代表上下文对象
        //后端渲染
        let news = [ //模拟数据
            {
                title:'程维：滴滴未来将不再以竞争和烧钱为导向',
                url:'https://baijia.baidu.com/s?id=1599957261943135697'
            },
            {
                title:'中国二次元内容的“大航海',
                url:'https://baijia.baidu.com/s?id=1599953993905729137'
            }
        ]
        await ctx.render('news.ejs',{news}); //渲染页面, 第二个参数是上面定义的数据

    }
}
module.exports = NewsController;

```

打开 http://127.0.0.1:7001/news , 就OK


## 7.读取远程接口服务

在实际应用中,Controller一般不会自己产出数据,也不会包含复杂的逻辑，复杂的过程应抽象为业务逻辑层 Service。

在app下 新建 service目录

### 7.1添加配置

config.default.js

```
exports.news = {
    url: 'https://baijia.baidu.com'
}

```

### 7.2编写Service

app/service/news.js

```
const { Service } = require('egg');
class NewsService extends Service {
    async list() {
        const result = await this.ctx.curl(this.config.news.url);
        let regexp = /<a href="(\/s\?id\=\d+[^"]+)".+>([\s\S]+?)<\/a>/g;
        let news = [];
        result.data.toString().replace(regexp, function () {
            if (!(arguments[2].includes('img') || arguments[2].includes('查看详情'))) {
                news.push({ url: 'https://baijia.baidu.com' + arguments[1], name: arguments[2] });
            }
        });
        return news;
    }
}
module.exports = NewsService;

```

### 7.3编写控制层

```
//controller\news.js
const { Controller } = require('egg');
class NewsController extends Controller {
    async index() {
        const news = await this.ctx.service.news.list();
        await this.ctx.render('news.ejs', { news });
    }
}
module.exports = NewsController;

```

## 8.扩展工具方法

* 框架提供了一种快速扩展的方式，只需在 app/extend 目录下提供扩展脚本即可
* Helper函数用来提供一些实用的 utility 函数。
* 访问方式通过 ctx.helper 访问到 helper对象

app/extend/helper.js

```
const moment = require('moment');
moment.locale('zh-cn');
exports.relative = time => moment(new Date(time)).fromNow();

```

news.ejs

```
<%=helper.relative(item.time)%>

```

## 9.中间件

打印请求的处理时间

app/middleware/time.js

```
module.exports = (options, app) => {
    return async function (ctx, next) {
        const start = Date.now();
        await next();
        console.log(options.name + (Date.now() - start) + ' ms');
    }
}

```

config.default.js

```
exports.middleware = [
    'time'
]
exports.time = {
    name: '总耗时:'
}

```

## 10.单元测试

测试文件应该放在项目根目录下的 test 目录下，并以 test.js 为后缀名，即 {ROOT}/test/*/.test.js。

请注意是放在项目的根目录下，而非app目录下 // {ROOT}/test/app/middleware/robot.test.js

```
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/middleware/robot.test.js', () => {
  it('should block robot', () => {
    return app.httpRequest()
      .get('/')
      .set('User-Agent', "Baiduspider")
      .expect(403);
  });
});

```
