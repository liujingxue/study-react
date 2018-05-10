
## 这是一个前后端分离项目

后台: eggjs+mongodb 提供API , 前端项目为 201812blog-api
前台: react+antdesign

文档: www.zhufengpeixun.cn/plan/html/32.ant.html

## 1.配置项目

### 1.1安装脚手架

```
cnpm i -g create-react-app yarn

```

cnpm i -g create-react-app


### 1.2新建项目

```
create-react-app zhufengpeixunblog
cd zhufengpeixunblog
cnpm start

```

create-react-app 201812blog
cd 201812blog
cnpm start

### 1.3报错

'create-react-app' 不是内部或外部命令，也不是可运行的程序

1.在安装完node以后，安装create-react-app成功了，但是使用命令时总是报错：create-react-app不是内部或外部命令，也不是可运行的程序或批处理文件。

解决办法：看看create-react-app模块是否在上述步骤的用户变量（本例是：{User}/AppData/Roaming/npm）中，如果不在的话，

说明你下载的路径和实际命令行找的命令路径不一致，需要手工设置。

查看npm所有配置的命令： npm config list


如果你的prefix不是你系统变量里面的对应的值，你需要设置成一致的，命令： npm config set prefix "D:\XXXXXX\XXXXX\XXX"

修改成功后在运行create-react-app即可。亲测有效。

因为最早是用 cnpm i -g create-react-app 来安装的

现在用 npm i -g create-react-app 安装，就报错了


### 1.4安装antd

```
cnpm i antd -S

```

### 1.5使用antd

```
import Button from 'antd/lib/button';

```

```
@import '~antd/dist/antd.css';

```

```
<div className="App">
    <Button>Button</Button>
</div>

```

src/App.js

```

// 使用antd
import Button from 'antd/lib/button';
import '_antd@3.5.1@antd/dist/antd.css';

<Button>测试</Button>

```


### 1.6按需加载

使用react-app-rewired 可以避免引入整个antd的库

默认配置进行自定义, react-app-rewired(一个对create-react-app进行自定义配置的社区解决方案)

### 1.6.1安装react-app-rewired

```
cnpm i react-app-rewired -S

```

### 1.6.2修改命令

之前是react-scripts启动的，现在改为react-app-rewired

package.json

```

//将scripts里面的react-scripts都改成react-app-rewired

"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-app-rewired eject"
}

```

还是通过cnpm start启动

### 1.6.3 config-overrides.js

怎么覆盖原有的配置呢，需要建立一个 config-overrides.js

```
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};

```

### 1.6.4 babel-plugin-import

要想实现按需加载，还要安装一个插件

babel-plugin-import是一个用于按需加载组件代码和样式的babel插件，现在我们尝试安装它并修改config-overrides.js文件。

```
cnpm i babel-plugin-import -D

```

config-overrides.js

```

+ const { injectBabelPlugin } = require('react-app-rewired');
  module.exports = function override(config, env) {
+   config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    return config;
  };

```

### 1.6.5 自定义主题

支持less

```
cnpm i react-app-rewire-less -D

```

```
 const { injectBabelPlugin } = require('react-app-rewired');
+ const rewireLess = require('react-app-rewire-less');

  module.exports = function override(config, env) {
-   config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
+   config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
+   config = rewireLess.withLoaderOptions({
+     modifyVars: { "@primary-color": "#1DA57A" },
+   })(config, env);
    return config;
  };

```

config-overrides.js

```
const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env){ //config是老的参数，env是环境变量
    //往里面再插入一个配置
    //向原来的webpack配置的babel插件列表中增加一个插件，按需导入。 babel-plugin-import
    config = injectBabelPlugin(['import',{libraryName:'antd', style: true}],config);  //库名:antd, style:true表示引入组件对应的样式
    //给webpack文件增加Less的支持
    //增加了对less的loader支持
    config = rewireLess.withLoaderOptions({
        //改变主题色
        modifyVars:{"@primary-color":"#1DA57A"},
    })(config,env);
    //执行对config的修改
    return config;
}

```


## 2.跑通路由

```
cnpm i react-router-dom -S

```

先将 src目录下的所有文件都删掉

src下建立 index.js

src/index.js

```


```

## 3.编写注册页