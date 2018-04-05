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