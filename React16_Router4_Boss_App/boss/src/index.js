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

