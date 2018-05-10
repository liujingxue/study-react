/**
 * Created by Administrator on 2018/5/10.
 */

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
        modifyVars:{"@primary-color":"#c00"},
    })(config,env);
    //执行对config的修改
    return config;
}