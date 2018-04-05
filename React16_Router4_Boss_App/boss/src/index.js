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




// class Test extends React.Component{
//     render(){
//         console.log(this.props)
//         //直接跳转到根目录
//         //this.props.history.push('/')
//         //this.props.match.params.location 获取url参数
//         return <h2>测试组件 {this.props.match.params.location}</h2>
//     }
// }





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

