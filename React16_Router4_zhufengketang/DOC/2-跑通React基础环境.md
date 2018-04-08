
## 建立目录

```
React16_Router4_zhufengketang
    |-- DOC                         //文档
    |-- node_modules
    |-- src                         //前端源码
        |-- api                     //发送请求
        |-- components              //每个页面的公有部分
        |-- containers              //每个页面
            |-- Home
                |-- Home.js
            |-- Lesson
                |-- Lesson.js
            |-- Profile
                |-- Profile.js
        |-- static                  //放静态资源，样式，图片等
                    |-- css
                        |-- common          //公共的样式
                            |-- index.less
                    |-- images
        |-- index.js                //入口文件
    |-- .babelrc                    //babel配置文件
    |-- index.html
    |-- package.json
    |-- webpack.config.js           //webpack的配置文件
```

## 安装React

```
npm i react react-dom redux react-redux react-router-dom redux-logger redux-thunk redux-promise less axios --save
```

## Home.js文件
```
import React from 'react'
class Home extends React.Component{
    render(){
        return (
            <div>Home</div>
        )
    }
}
export default Home
```

## Lesson.js文件
```
import React from 'react'
class Lesson extends React.Component{
    render(){
        return (
            <div>Lesson</div>
        )
    }
}
export default Lesson
```

## Profile.js文件
```
import React from 'react'
class Profile extends React.Component{
    render(){
        return (
            <div>Profile</div>
        )
    }
}
export default Profile
```

## index.js文件
```
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home/Home'
import Profile from './containers/Profile/Profile'
import Lesson from './containers/Lesson/Lesson'
import {BrowserRouter,Route,Redirect,Switch,Link} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/lesson'>Lesson</Link>
                </li>
            </ul>
            <Switch>
                <Route path='/home' exact component={Home}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/lesson' component={Lesson}></Route>
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
)

```

## .babelrc文件
```
{
  "presets":["babel-preset-es2015","babel-preset-stage-0","babel-preset-react"]
}
```

## index.html文件
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Title</title>
</head>
<body>
<div id="root">1</div>
</body>
</html>
```


## webpack.config.js文件
```
let webpack  = require('webpack')
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('./dist')
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif)$/,use:'file-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}
```


## package.json文件
```
{
  "name": "React16_Router4_zhufengketang",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "css-loader": "^0.28.11",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "less-loader": "^4.1.0",
    "style-loader": "^0.20.3",
    "url-loader": "^1.0.1",
    "webpack": "^4.5.0",
    "webpack-cli": "^2.0.14",
    "webpack-dev-server": "^3.1.2"
  },
  "dependencies": {
    "axios": "^0.18.0",
    "less": "^3.0.1",
    "react": "^16.3.1",
    "react-dom": "^16.3.1",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "redux-logger": "^3.0.6",
    "redux-promise": "^0.5.3",
    "redux-thunk": "^2.2.0"
  }
}

```


## 运行
npm run dev

浏览器打开:localhost:8080

## 以上就跑通了React基础的含路由的环境了
