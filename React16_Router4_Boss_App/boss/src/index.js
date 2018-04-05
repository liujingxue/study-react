import React from 'react'
import ReactDOM from 'react-dom'
//applyMiddleware专门管理中间件
//compose用于组合函数
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import App from './App'
import {counter} from './index.redux'

//如果window.devToolsExtension存在则使用,否则是个空函数
const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    reduxDevtools
))



//使用React-redux时，只传store={store}
ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>),
    document.getElementById('root')
)

