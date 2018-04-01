/*
//React+Redux
//dispatch action reducer state 单身边数据流
//登陆注册

//->React开发环境的搭建
//->Create-react-app脚手架生成文件格式
//Create-react-app是facebook推荐脚手架
//如何安装和使用第三方库
//如何定制化配置

//->React官方脚手架
//官网:https://github.com/facebookkincubator/create-react-app
//npm start开启调试环境
//浏览器访问localhost:3000查看调试页面

//->安装
//全局安装
//sudo npm i -g create-react-app
//安装目录
/usr/local/bin/create-react-app -> /usr/local/lib/node_modules/create-react-app/index.js

//新建应用->boss为应用名称
create-react-app boss

//进入boss
cd boss
//开启调试环境
npm start 或者 yarn start
//如果使用yarn
yarn build
yarn test
yarn eject

//->目录结构
|--README.md           //介绍文档
|--node_modules        //第三方安装包
|--package.json        //npm项目配置
|--.gitignore          //git配置
|--public              //公共资源
    |--index.html      //首页html
|--src                 //源码目录
    |--App.css         //css文件
    |--App.js          //React组件
    |--index.js        //入口js文件
    |--logo.svg        //svg图片

//->如何使用create-react-app
npm run eject 弹出配置文件，可以自定义配置webpack
扩展package.json里的script字段，扩展npm run命令

npm i redux --save 安装第三方库redux


//使用redux
import {createStore} from 'redux';

//错误一
sh: react-scripts: command not found
This is probably not a problem with npm. There is likely additional logging output above.
//解决方法
//第一种：
npm i
npm start
//第二种：
rm -rf node_modules
rm -rf package-lock.json
npm i
npm start
//实测：第一种方法可以解决

//->
npm run eject
是生成webpack的配置文件
生成config和scripts目录





























*/