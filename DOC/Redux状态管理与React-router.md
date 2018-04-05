## 一、Redux是什么

专注于状态管理的库

* Redux专注于状态管理，和react解耦
* 单一状态，单向数据流
* 核心概念：store, state, action, reducer

* 首先通过reducer新建store,随时通过store.getState获取状态
* 需要状态变更, store.dispatch(action)来修改状态
* Reducer函数接受state和action,返回新的state,可以用store.subscribe监听每次修改

```
//安装redux
npm i redux --save

//Redux最基本的使用
//index.js
import {createStore} from 'redux';
//1.新建store
//通过reducer建立
//根据老的state和action 生成新的状态
function counter(state=0,action){
    switch(action.type){
        case '加':
            return state+1
        case '减':
            return state-1
        default:
            return 10
    }
}
//1.新建store
const store = createStore(counter)
const init = store.getState()
console.log(init); //10
function listener(){
    const current = store.getState()
    console.log(`现在有机枪${current}`);
}
//订阅,相当于每一次都会触发listener方法
store.subscribe(listener)
//派发事件，传递action
store.dispatch({type:'加'})
console.log(store.getState()); //11
store.dispatch({type:'减'})
console.log(store.getState()); //10

```

Redux如何和React一起用

* 把store.dispatch方法传递给组件，内部可以调用修改状态
* Subscribe订阅render函数，每次修改都重新渲染
* Redux相关内容，移到单独的文件index.redux.js单独管理

```
//分成三个组件
|--src
    |--index.redux.js
    |--index.js
    |--App.js

//index.redux.js , 专门用于存放方法
const ADD = '加';
const REMOVE = '减';


//reducer
export function counter(state=0,action){
    switch(action.type){
        case ADD:
            return state+1
        case REMOVE:
            return state-1
        default:
            return 10
    }
}

//action creator
export function add(){
    return {type:ADD}
}

export function remove(){
    return {type:REMOVE}
}


//index.js, 用于订阅和渲染页面
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import App from './App'
import {counter,add,remove} from './index.redux'

const store = createStore(counter)

//把add方法和remove方法以属性的方式传递给App.js组件
function render(){
    ReactDOM.render(<App store={store} add={add} remove={remove}/>,document.getElementById('root'))
}
render()
//订阅一下，状态改变每次都执行一下render
store.subscribe(render)


//App.js,作为一个组件
import React from 'react'
class App extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const store = this.props.store
        const num = store.getState()
        const add = this.props.add
        const remove = this.props.remove
        return (
            <div>
                <h1>现在有枪{num}</h1>
                <button onClick={()=>store.dispatch(add())}>加</button>
                <button onClick={()=>store.dispatch(remove())}>减</button>
            </div>
        )


    }
}
export default App

```


现在都是同步形式，更进一步，让Redux可以处理异步

处理异步、调试工具、更优雅的和react结合

* Redux处理异步，需要redux-thunk插件
* npm i redux-devtools-extension并且开启
* 使用react-redux优雅的链接react和redux

```
//处理异步
//安装
npm i redux-thunk --save
//使用redux-thunk
Redux默认只处理同步，异步任务需要react-thunk中间件
npm i redux-thunk --save
使用applyMiddleware开启thunk中间件
现在的action是返回一个对象
到时候，action可以返回函数，使用dispatch提交action

//例子
|--src
    |--index.redux.js
    |--index.js
    |--App.js

//index.redux.js, 用于存放方法
const ADD = '加';
const REMOVE = '减';


//reducer
export function counter(state=0,action){
    switch(action.type){
        case ADD:
            return state+1
        case REMOVE:
            return state-1
        default:
            return 10
    }
}

//action creator
export function add(){
    return {type:ADD}
}

export function remove(){
    return {type:REMOVE}
}

//异步的加
export function addAsync(){
    //现在可以return一个函数
    return dispatch=>{
        setTimeout(()=>{
            dispatch(add())
        },2000)
    }
}


//index.js,用于订阅和渲染页面
import React from 'react'
import ReactDOM from 'react-dom'
//applyMiddleware专门管理中间件
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import {counter,add,remove,addAsync} from './index.redux'

const store = createStore(counter,applyMiddleware(thunk))

//把add方法和remove方法以属性的方式传递给App.js组件
function render(){
    ReactDOM.render(<App store={store} add={add} remove={remove} addAsync={addAsync}/>,document.getElementById('root'))
}
render()
//订阅一下，状态改变每次都执行一下render
store.subscribe(render)

//App.js,一个组件
import React from 'react'
class App extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const store = this.props.store
        const num = store.getState()
        const add = this.props.add
        const remove = this.props.remove
        const addAsync = this.props.addAsync
        return (
            <div>
                <h1>现在有枪{num}</h1>
                <button onClick={()=>store.dispatch(add())}>加</button>
                <button onClick={()=>store.dispatch(remove())}>减</button>
                <button onClick={()=>store.dispatch(addAsync())}>等2秒再加</button>
            </div>
        )


    }
}
export default App


```


调试工具

Chrome搜索redux安装

* 新建store的时候判断window.devToolsExtension
* 使用compose结合thunk和window.devToolsExtension
* 调试窗的redux选项卡，实时看到state

```
//安装的是Redux DevTools
//这里没有安装

//使用
//index.js
import React from 'react'
import ReactDOM from 'react-dom'
//applyMiddleware专门管理中间件
//compose用于组合函数
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import {counter,add,remove,addAsync} from './index.redux'

//如果window.devToolsExtension存在则使用,否则是个空函数
const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    reduxDevtools
))



//把add方法和remove方法以属性的方式传递给App.js组件
function render(){
    ReactDOM.render(<App store={store} add={add} remove={remove} addAsync={addAsync}/>,document.getElementById('root'))
}
render()
//订阅一下，状态改变每次都执行一下render
store.subscribe(render)

```


使用react-redux

安装

* npm i react-redux --save
* 忘记subscribe,记住reducer,action和dispatch即可
* React-redux提供Provider和connect两个接口来链接

```
//使用

```

## 二、Redux核心概念

## 三、Redux实战