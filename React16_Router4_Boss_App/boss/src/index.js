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