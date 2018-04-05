## 一、React-router4是什么

React官方推荐路由库，4是最新版本

* 4是全新的版本，和之前版本不兼容，浏览器和RN均兼容
* React开发单页应用必备，践行路由即组件的概念
* 核心概念：动态路由、Route、Link、Switch

一个简单的例子

* npm i react-router-dom --save
* Router4使用react-router-dom作为浏览器端的路由

入门组件

* BrowserRouter,包裹整个应用
* Router路由对应渲染的组件，可嵌套
* Link跳转专用

```
//使用react-router4
//exact表示完全匹配

//index.js

import React from 'react'
import ReactDOM from 'react-dom'
//applyMiddleware专门管理中间件
//compose用于组合函数
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import App from './App'
import {counter} from './index.redux'

//如果window.devToolsExtension存在则使用,否则是个空函数
const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    reduxDevtools
))

//自定义组件
function two(){
    return <h2>第二个组件</h2>
}
function three(){
    return <h2>第三个组件</h2>
}

//使用React-redux时，只传store={store}
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>one</Link>
                    </li>
                    <li>
                        <Link to='/two'>two</Link>
                    </li>
                    <li>
                        <Link to='/three'>three</Link>
                    </li>
                </ul>
                <Route path='/' exact component={App}></Route>
                <Route path='/two' component={two}></Route>
                <Route path='/three' component={three}></Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)


```


其他组件

* url参数，Route组件参数可用冒号标识参数
* Redirect组件 跳转
* Switch只渲染一个子Route组件

```
//index.js,使用url参数

import React from 'react'
import ReactDOM from 'react-dom'
//applyMiddleware专门管理中间件
//compose用于组合函数
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import App from './App'
import {counter} from './index.redux'

//如果window.devToolsExtension存在则使用,否则是个空函数
const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    reduxDevtools
))

//自定义组件
class Test extends React.Component{
    render(){
        console.log(this.props)
        //直接跳转到根目录
        //this.props.history.push('/')
        //this.props.match.params.location 获取url参数
        return <h2>测试组件 {this.props.match.params.location}</h2>
    }
}



//使用React-redux时，只传store={store}
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>one</Link>
                    </li>
                    <li>
                        <Link to='/two'>two</Link>
                    </li>
                    <li>
                        <Link to='/three'>three</Link>
                    </li>
                </ul>
                <Route path='/' exact component={App}></Route>
                <Route path='/:location' component={Test}></Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)



//index.js,使用Redirect跳转
//Switch只渲染命中的第一个Route

//index.js

import React from 'react'
import ReactDOM from 'react-dom'
//applyMiddleware专门管理中间件
//compose用于组合函数
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom'
import App from './App'
import {counter} from './index.redux'

//如果window.devToolsExtension存在则使用,否则是个空函数
const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    reduxDevtools
))

//自定义组件
function two(){
    return <h2>第二个组件</h2>
}
function three(){
    return <h2>第三个组件</h2>
}

//自定义组件
class Test extends React.Component{
    render(){
        console.log(this.props)
        //直接跳转到根目录
        //this.props.history.push('/')
        //this.props.match.params.location 获取url参数
        return <h2>测试组件 {this.props.match.params.location}</h2>
    }
}



//使用React-redux时，只传store={store}
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>one</Link>
                    </li>
                    <li>
                        <Link to='/two'>two</Link>
                    </li>
                    <li>
                        <Link to='/three'>three</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path='/' exact component={App}></Route>
                    <Route path='/two' component={two}></Route>
                    <Route path='/three' component={three}></Route>
                    <Route path='/:location' component={Test}></Route>
                    <Redirect to='/two'></Redirect>
                </Switch>

            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)


```



## 二、和Redux配合，复杂Redux应用

@connect,这种装饰器的写法，需要安装 babel-plugin-transform-decorators-legacy

并且在package.json中配置

npm i babel-plugin-transform-decorators-legacy --save-dev

```
//package.json配置
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd-mobile",
          "style": "css"
        }
      ],
      [
        "transform-decorators-legacy"
      ]
    ]
},

```

和redux配合

* 复杂redux应用，多个reducer,用combineReducers合并
* Redirect组件 跳转
* Switch只渲染一个子Route组件

```
//简单demo

//index.js

import React from 'react'
import ReactDOM from 'react-dom'
//applyMiddleware专门管理中间件
//compose用于组合函数
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import {reducers} from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'


//如果window.devToolsExtension存在则使用,否则是个空函数
const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
))


//使用React-redux时，只传store={store}
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>

            <Switch>
                <Route path='/login' component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>

        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)



//Dashboard.js

import React from 'react'
import {Link,Route} from 'react-router-dom'
import App from './App'

//自定义组件
function two(){
    return <h2>第二个组件</h2>
}
function three(){
    return <h2>第三个组件</h2>
}

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const match = this.props.match
        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>one</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/two`}>two</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/three`}>three</Link>
                    </li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}></Route>
                <Route path={`${match.url}/two`} component={two}></Route>
                <Route path={`${match.url}/three`} component={three}></Route>
            </div>
        )
    }
}

export default Dashboard


```



