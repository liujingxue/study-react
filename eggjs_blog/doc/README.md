
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





