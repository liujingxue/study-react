
## egg.js+ antdesgin   express

www.zhufengpeixun.cn/plan/html/31.egg-1.html

## 1.使用脚手架生成项目

```
cnpm i egg-init -g
egg-init zhufengpeixunblog-api --type simple
cd zhufengpeixunblog-api
cnpm i

cnpm run dev
open localhost:7001

```

npm i egg-init -g
egg-init 201812blog-api --type simple  //最简单的项目, 用来提供后台接口
cd 201812blog-api
npm i

npm run dev  //启动
打开 localhost:7001


### 1.1安装错误

Got error when check update: Response timeout for 5000ms,

GET https://registry.npmjs.org/egg-init/latest -1 (connected: true, keepalive socket: false)

再试一次就好了


## 2.编写用户注册功能

### 2.1编写路由

app/router.js

```

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/api/users/signup', controller.users.signup);
  router.post('/api/users/signin', controller.users.signin);
  router.get('/api/users/signout', controller.users.signout);
};

```

### 2.2编写控制器

app/controller/users.js

```


```

### 2.3启动mongodb

打开一个cmd

mongod --dbpath=D:\mongo

再打开一个cmd

mongo

### 2.4连接数据库

使用egg-mongoose

安装

```
cnpm i egg-mongoose --save

```

npm i egg-mongoose --save

### 2.5启用插件

{root}/config/plugin.js

```
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose'
}

```

### 2.6配置插件

{root}/config/config.default.js

```
exports.mongoose = {
    client:{
        url: 'mongodb://127.0.0.1/zhufengpeixunblog',
        options:{}
    }
}

```

### 2.7配置模型

app下建立model目录

app/model/user.js

```
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ObjectId = Schema.Types.ObjectId;
    const UserSchema = new Schema({
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: String
    });
    return mongoose.model('User', UserSchema);
}

```

### 2.8在控制器中使用

app/controller/users.js

```
const BaseControler = require('./base');
class UserController extends BaseControler {
    //用户注册
    async signup() {
        let { ctx, app } = this;
        let user = ctx.request.body;
        try {
            user = await ctx.model.User.create(user);
            this.success(user);
        } catch (error) {
            this.error(error);
        }
    }
}

```

### 2.9配置路由

```
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/users/signup', controller.users.signup);
};

```

### 2.10暂时禁用CSRF

CSRF是跨站请求伪造，eggjs内置了CSRF防范方案

config/config.default.js

```
config.security = {
    csrf: false
}

```

### 2.11使用Postman


post http://127.0.0.1:7001/api/users/signup

Body -> 选中raw -> 必须选择 JSON(application/json)

{
	"username":"liujingxue",
	"password":"1",
	"email":"523624469@qq.com"
}

执行成功

### 2.12定义一个基类

controller下建立 base.js

app/controller/base.js

```
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

```

### 2.13修改控制器users.js

app/controller/users.js

```
const BaseController = require('./base');
class UsersController extends BaseController{
    async signup(){ //注册方法
        let {ctx} = this;
        //1.得到请求体 {username,password,email}
        //ctx.request.body 请求体
        //ctx.response.body 响应体  ctx.body = ctx.response.body 响应体
        let user = ctx.request.body;
        //使用用户模型 model目录下的User模型
        console.log(user);

        try{
            //保存数据库
            user = await ctx.model.User.create(user);  // User必须大写
            this.success({user});
        }catch(error){
            this.error(error);
        }
    }
}

module.exports = UsersController;

```




## 3.编写用户登录功能

### 3.1控制器上增加方法

app/controller/users.js

```
async signin(){ //登录方法
    let {ctx} = this;
    let user = ctx.request.body; //得到请求体
    try{
        user = await ctx.model.User.findOne(user); //如果没有找到，返回null,如果找到，返回一个对象
        if(user){
            //如果登录成功了，则需要写入session会话
            //可以通过ctx.session.user是否为null来判断此用户是否登录
            ctx.session.user = user;
            this.success({user});
        }else{
            this.error('用户名或者密码错误!');
        }
    }catch(error){
        this.error(error);
    }
}

```

### 3.2配置路由

```
router.post('/api/users/signin', controller.users.signin);

```

### 3.3使用Postman

post http://127.0.0.1:7001/api/users/signin

Body -> 选择raw -> JSON(application/json)

{
	"username":"liujingxue",
	"password":"123456"
}

请求成功


## 4.编写用户退出功能

### 4.1控制器上增加方法

app/controller/users.js

```
async signout(){ //登出方法
    let {ctx} = this;
    ctx.session.user = null;
    this.success('退出成功');
}

```

### 4.2配置路由

```
router.get('/api/users/signout', controller.users.signout);

```

### 4.3使用Postman

get http://127.0.0.1:7001/api/users/signout

执行成功



## 5.分类管理

| Method | Path | Controller.Action |
| :----- | :----- | :--------- |
| POST | /posts| app.controller.posts.create |
| GET | /posts | app.controller.posts.index |
| PUT | /posts/:id | app.controller.posts.update |
| DELETE | /posts/:id | app.controller.posts.destroy |


* 分类列表
    * get    /api/categories     列表
    * post   /api/categories     增加
    * put    /api/categories/:id 编辑
    * delete /api/categories/:id 删除

如果想通过RESTful的方式来定义路由，我们提供了 app.resources('routerName','pathMatch',controller) 快速在

一个路径上生成CRUD路由结构。


### 5.1配置路由

```
router.resources('categories', '/api/categories', controller.categories);

```

### 5.2新建控制器

controller下建立 categories.js

app/controller/categories.js

```

let BaseController = require('./base');
class CategoriesController extends BaseController{
    async index(){

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


}
module.exports = CategoriesController;

```

### 5.3编写模型

model下建立 category.js

app/model/category.js

```
module.exports = app => {
    //先得到mongoose的模块，通过它可以定义骨架模型和model
    let mongoose = app.mongoose;
    //先定义Schema, 通过它可以定义集合里文档的属性名和类型
    let Schema = mongoose.Schema;
    //用户集合的模型骨架，它不连接数据库也不能操作数据
    let CategorySchema = new Schema({
        name: String
    });
    //返回了一个用户模型，用户模型是可以对数据库进行增删改查的
    return mongoose.model('Category',CategorySchema);
}

```

### 5.4使用Postman

post http://127.0.0.1:7001/api/categories

body -> 选择raw -> JSON(application/json)

{
    "name":"数码产品"
}

执行成功


### 5.5查看分类列表

app/controller/categories.js

无分页

```

async index(){
    let {ctx} = this;
    try{
        let items = await ctx.model.Category.find({});
        this.success({items});
    }catch(error){
        this.error(error);
    }
}

```

编写分页

查询参数，放在URL地址中的查询字符串里

* "pageNum":1,   //显示当前显示的页
* "pageSize":5,  //显示每页条数是5
* "keyword":"a"  //关键字

```

//查询分类列表
async index() {
    let { ctx } = this;
    let { pageNum = 1, pageSize = 10, keyword } = ctx.query;
    pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
    pageSize = isNaN(pageSize) ? 1 : parseInt(pageSize);
    let query = {};
    if (keyword) {
        query.name = new RegExp(keyword);
    }
    let total = await ctx.model.Category.count(query);
    let items = await ctx.model.Category.find(query).skip((pageNum - 1) * pageSize).limit(pageSize);
    this.success({
        items,
        pageNum,
        pageSize,
        total,
        pageCount: Math.ceil(total / pageSize)
    });
}

```


### 5.6使用Postman

get  http://127.0.0.1:7001/api/categories?pageNum=1&pageSize=2

http://127.0.0.1:7001/api/categories?pageNum=1&pageSize=5&keyword=数码


### 5.7修改分类

```

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


```

执行Postman

put  http://127.0.0.1:7001/api/categories/5af3e520fa70362c4485e74e

body -> 选择raw -> JSON(application/json)

{
    "name":"数码宝贝"
}


### 5.8删除分类

```

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

```


执行Postman

delete  http://127.0.0.1:7001/api/categories/5af3f026e0494a29648aafd7

删除成功


## 6.文章管理






