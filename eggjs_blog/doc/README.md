
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


## 3.编写用户登录功能


