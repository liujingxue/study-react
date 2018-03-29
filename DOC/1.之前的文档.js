/**
 * Created by Administrator on 2018/3/29.
 */
/*


 React 开发文档
 1. 怎么从零开始构建一个React基础工程
 所需包
 环境参数：
 node  v8.8.1
 npm   v5.4.2
 1.1 先NPM 配置国内源
 npm install -g cnpm --registry=https://registry.npm.taobao.org
 cnpm  v5.1.1

 注意：
 在win7下，如果node版本太高的话，会出现C+库不支持的情况
 V6.11.0可以顺利运行

 注意：
 Node.js版本为v6.11.0时，项目也可以顺利运行。

 还有一种办法
 修改配置文件
 Windows: NodeJS安装目录下node_modules\npm\.npmrc
 Mac: ~下的 .npmrc
 在.npmrc里面加上这句话
 registry=https://registry.npm.taobao.org
 然后
 以后所有的命令不用敲cnpm, 还是敲npm,还是从taobao的镜像源中获取包。

 这里，没有修改配置文件.npmrc
 还是使用cnpm

 1.2 使用NPM配置React环境
 如何用npm包来初始化React项目?
 首先初始化npm
 npm init

 安装React及相关包
 cnpm install --save react react-dom babelify babel-preset-react
 安装好的版本
 react ^16.0.0
 react-dom ^16.0.0
 babelify ^8.0.0
 babel-preset-react ^6.24.1

 还要安装对ES6的支持
 cnpm install babel-preset-es2015 --save
 安装好的版本
 babel-preset-es2015 ^6.24.1

 1.3 webpack热加载配置
 首先全局安装webpack
 cnpm install -g webpack

 还要全局安装 webpack-dev-server
 cnpm install -g webpack-dev-server

 然后在项目中安装webpack及相关包
 cnpm install webpack --save
 cnpm install webpack-dev-server --save
 安装好的版本
 webpack ^3.8.1
 webpack-dev-server ^2.9.3

 1.4 安装babel-loader及babel-core
 还需要安装 babel-loader及babel-core
 cnpm install babel-loader --save
 cnpm install babel-core --save

 1.5 建好项目目录
 项目名称：cms
 |-- node_modules
 |-- src
 |-- js
 |- index.js
 |- index.html
 |- package.json
 |- webpack.config.js

 1.6 在文件中输入以下内容

 在cms/index.html里面
 输入以下内容
 <div id="app">123</div>
 <script src="./src/bundle.js"></script>

 在cms/src/js/index.js里面
 输入以下内容
 const React = require('react');
 const ReactDOM = require('react-dom');

 ReactDOM.render(
 <h1>Hello World!</h1>,
 document.getElementById('example')
 );

 在webpack.config.js里面
 输入以下内容
 var webpack = require('webpack');
 var path = require('path');

 module.exports = {
 context: __dirname + '/src',
 entry: "./js/index.js",
 module:{
 loaders:[{
 test: /\.js?$/,
 exclude: /(node_modules)/,
 loader: 'babel-loader',
 query: {
 presets: ['react','es2015']
 }
 }]
 },
 output:{
 path: __dirname + "/src/",
 publicPath:"/src/",                     //指定编译后的包(bundle)的访问位置
 filename: "bundle.js"
 }
 };

 运行webpack
 生成了bundle.js文件
 在浏览器打开index.html
 出现Hello World!

 这时，最基础的react.js项目，就运行成功了。

 此时的package.json里面的内容如下：
 {
 "name": "cms",
 "version": "1.0.1",
 "description": "yes",
 "main": "index.js",
 "scripts": {
 "test": "echo \"Error: no test specified\" && exit 1"
 },
 "author": "",
 "license": "ISC",
 "dependencies": {
 "babel-core": "^6.26.0",
 "babel-loader": "^7.1.2",
 "babel-preset-es2015": "^6.24.1",
 "babel-preset-react": "^6.24.1",
 "babelify": "^8.0.0",
 "react": "^16.0.0",
 "react-dom": "^16.0.0",
 "webpack": "^3.8.1",
 "webpack-dev-server": "^2.9.3"
 }
 }

 如果出现
 ERROR in Entry module not found: Error: Can't resolve 'babel-loader' in 'D:\React.js入门基础与案例开发文档\app\cms/src'
 是因为没有安装babel-loader以及babel-core


 1.7 如何实现webpack热加载?
 需要每次保存，都自动刷新
 webpack --watch         // 代码有变更，会自动编译。  但浏览器不会自动刷新。

 //运行
 webpack-dev-server --content-base --inline --hot
 //浏览器中输入http://localhost:8080/就能实时刷新
 //如果浏览器还是实时刷新不灵敏，
 //在WebStorm中设置一下，Settings --> Appearance & Behavior --> System Settings -->
 Synchronization --> Use "safe write"(save changes to a temporary file first) 前面的勾去掉。（不让保存为临时文件）


 2. React基础知识
 2.1 React虚拟DOM概念
 2.2 React组件
 如何新建组件？
 在src/js文件夹下，新建components文件夹
 在components文件夹下，新建组件 header.js
 在header.js里面
 输入以下内容
 import React from 'react';
 import ReactDOM from 'react-dom';

 export default class Header extends React.Component{
 render(){
 return (
 <header>
 <h1>这里是头部</h1>
 </header>
 )
 }
 }

 在index.js里面
 输入以下内容
 const React = require('react');
 const ReactDOM = require('react-dom');
 import Header from './components/header';


 class Index extends React.Component{
 render(){
 return (
 <div>
 <Header/>
 <h1>这里是主体</h1>
 </div>
 )
 }
 }

 ReactDOM.render(<Index/>,document.getElementById('app'));

 2.3 React多组件嵌套
 如何实现多组件嵌套?
 在components文件夹下
 新建组件footer.js和body.js
 在footer.js里面
 输入以下内容
 import React from 'react';
 import ReactDOM from 'react-dom';

 export default class Footer extends  React.Component{
 render(){
 return(
 <footer>
 <h1>这里是尾部</h1>
 </footer>
 )
 }
 }

 在body.js里面
 输入以下内容
 import React from 'react';
 import ReactDOM from 'react-dom';

 export default class Body extends  React.Component{
 render(){
 return(
 <div>
 <h1>这里是内容</h1>
 </div>
 )
 }
 }

 在index.js里面
 输入以下内容
 const React = require('react');
 const ReactDOM = require('react-dom');
 import Header from './components/header';
 import Footer from './components/footer';
 import Body from './components/body';


 class Index extends React.Component{
 render(){
 return (
 <div>
 <Header/>
 <Body/>
 <Footer/>
 </div>
 )
 }
 }

 ReactDOM.render(<Index/>,document.getElementById('app'));

 2.3.1 拓展：
 如何处理登录
 React最重要的就是属性
 在index.js里面
 输入以下内容
 const React = require('react');
 const ReactDOM = require('react-dom');
 import Header from './components/header';
 import Footer from './components/footer';
 import Body from './components/body';


 class Index extends React.Component{
 render(){
 let component;
 if(用户已登录){
 component = <loginedHeader/>
 }else{
 component = <unloginedHeader/>
 }
 return (
 <div>
 {component}
 <Body/>
 <Footer/>
 </div>
 )
 }
 }

 ReactDOM.render(<Index/>,document.getElementById('app'));

 2.4 JSX内置表达式
 2.4.1 三元表达式
 在body.js里面
 输入以下内容
 import React from 'react';
 import ReactDOM from 'react-dom';

 export default class Body extends  React.Component{
 render(){

 // 三元表达式判断userName 是否为空
 let userName = 'jack';

 return(
 <div>
 <h1>这里是内容</h1>
 <p>
 { userName == '' ? '用户还没有登录' : '用户名:'+userName }
 </p>
 </div>
 )
 }
 }

 第二种用法，在input里面绑定true 或者false。
 在body.js里面
 输入以下内容
 import React from 'react';
 import ReactDOM from 'react-dom';

 export default class Body extends  React.Component{
 render(){

 // 在input里面绑定true 或者 flase
 let boolName = true;

 return(
 <div>
 <h1>这里是内容</h1>
 <p>
 <input type='button' value='默认按钮' disabled={boolName} />
 </p>
 </div>
 )
 }
 }

 2.4.2 注释
 // 或者是

2.4.3 怎么解析html
在body.js里面
输入以下内容
import React from 'react';
import ReactDOM from 'react-dom';

export default class Body extends  React.Component{
    render(){

        // 解析html
        let htmlName = 'IMOOC&nbsp;LESSON';

        return(
            <div>
                <h1>这里是内容</h1>
                <p dangerouslySetInnerHTML={{__html:htmlName}}>

                </p>
            </div>
        )
    }
}


2.5 生命周期
2.5.1 流程图
STAER --> getDefaultProps --> getInitialState --> componentWillMount --> render --> componentDidMount --> 运行中
2.5.2 componentWillMount() 函数
表示页面将要加载的时候
在body.js里面
输入以下内容
import React from 'react';
import ReactDOM from 'react-dom';

export default class Body extends  React.Component{

    // 页面将要加载的时候
    componentWillMount(){
        // 定义你的逻辑即可
        console.log("这是body");
    }

    render(){

        return(
            <div>
                <h1>这里是内容</h1>
            </div>
        )
    }
}

2.5.3 componentDidMount() 函数
表示页面已经加载完了
在body.js里面
输入以下内容
import React from 'react';
import ReactDOM from 'react-dom';

export default class Body extends  React.Component{

    // 页面已经加载完了
    componentDidMount(){
        // 定义你的逻辑即可
        console.log("这是body");
    }

    render(){

        return(
            <div>
                <h1>这里是内容</h1>
            </div>
        )
    }
}

2.5.4 不同的页面的，生命周期的调用顺序
调用顺序
Index - componentWillMount
Body - componentWillMount
Body - componentDidMount
Index - componentDidMount

因为body.js 是index.js 的组件

2.6 State属性
React里面最重要的就是属性
State是页面的状态的值
把State属性的初始化，放在constructor()函数里面
定义的State属性，只会在当前的这个类中，有作用
不会影响其他组件
在body.js里面
输入以下内容
import React from 'react';
import ReactDOM from 'react-dom';

export default class Body extends  React.Component{

    constructor(){
        super();   // 调用基类的所有的初始化方法
        // 初始化State属性
        // 里面可以传入很多的东西
        this.state = {
            userName : "jack",
            passWord : "123456"
        }
    }

    render(){

        return(
            <div>
                <h1>这里是内容</h1>
                <p>显示出属性： {this.state.userName}</p>
            </div>
        )
    }
}

2.6.1 更改State属性
在body.js里面
输入以下内容
import React from 'react';
import ReactDOM from 'react-dom';

export default class Body extends  React.Component{

    constructor(){
        super();   // 调用基类的所有的初始化方法
        // 初始化State属性
        // 里面可以传入很多的东西
        this.state = {
            userName : "jack",      // 初始化赋值
            passWord : "123456"     // 初始化赋值
        }
    }

    render(){


        // 更改state属性
        setTimeout(()=>{
            this.setState({userName: "IMOOC"});
        }, 4000);

        return(
            <div>
                <h1>这里是内容</h1>
                <p>显示出属性： {this.state.userName}</p>
            </div>
        )
    }
}

2.7 Props属性
React中最重要的就是Props属性
Props就是向其他组件，传递的参数
在index.js里面
输入以下内容
const React = require('react');
const ReactDOM = require('react-dom');
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';


class Index extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Body userid={123456} username={"IMOOC"}/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('app'));

在body.js里面
接收传递过来的参数
import React from 'react';
import ReactDOM from 'react-dom';

export default class Body extends  React.Component{

    render(){
        return(
            <div>
                <h1>这里是内容</h1>
                <p>接受传递过来的属性：{this.props.userid} {this.props.username}</p>
            </div>
        )
    }
}

2.8 事件与数据的双向绑定
2.8.1 绑定点击事件
在body.js里面
输入以下内容
import React from 'react';
import ReactDOM from 'react-dom';

export default class Body extends  React.Component{

    constructor(){
        super();  // 调用基类的所有的初始化方法
        this.state = {
            userName : "jack",     // 初始化赋值
            passWord : "123456"    // 初始化赋值
        };
    };


    // 定义一个事件
    changeuserInfo(){
        this.setState({userName : "IMOOC"});
    }

    render(){
        return(
            <div>
                <h1>这里是内容</h1>
                <p>{this.state.userName} {this.state.passWord}</p>
                <input type="button" value="提交" onClick={this.changeuserInfo.bind(this)}/>
            </div>
        )
    }
}

2.8.2 通过绑定点击事件传参
在body.js里面
输入以下内容
import React from 'react';
import ReactDOM from 'react-dom';

export default class Body extends  React.Component{

    constructor(){
        super();  // 调用基类的所有的初始化方法
        this.state = {
            userName : "jack",     // 初始化赋值
            passWord : "123456"    // 初始化赋值
        };
    };


    // 定义一个事件
    changeuserInfo(userName){
        this.setState({userName : userName});
    }

    render(){
        return(
            <div>
                <h1>这里是内容</h1>
                <p>{this.state.userName} {this.state.passWord}</p>
                <input type="button" value="提交" onClick={this.changeuserInfo.bind(this, "IMOOC")}/>
            </div>
        )
    }
}


2.8.1 如何由自组件向父组件传递参数？
Props还可以用来传函数
可以由父页面，通过Props向子页面传函数
新建一个body.js 的自组件 bodychild.js
在bodychild.js里面
输入以下内容
import React from 'react';
import ReactDOM from 'react-dom';

export default class BodyChild extends React.Component{
    render(){
        return (
            <div>
                <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
            </div>
        )
    }
}
使用的是，父组件传递过来的Props属性里面的函数

在body.js里面
输入以下内容
import React from 'react';
import ReactDOM from 'react-dom';

import BodyChild from './bodychild';

export default class Body extends  React.Component{

    constructor(){
        super();  // 调用基类的所有的初始化方法
        this.state = {
            userName : "jack",     // 初始化赋值
            passWord : "123456"    // 初始化赋值
        };
    };

    // 定义一个给子组件用的函数
    handleChildValueChange(event){
        // 子组件传过来的参数，用event参数接收。
        this.setState({userName : event.target.value});
    };

    render(){
        return(
            <div>
                <h1>这里是内容</h1>
                <p>{this.state.userName} {this.state.passWord}</p>
                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}


2.9 可复用组件
看《React.js入门基础与案例开发文档一》




















*/