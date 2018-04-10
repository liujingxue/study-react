import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home/Home'
import Profile from './containers/Profile/Profile'
import Lesson from './containers/Lesson/Lesson'
import Login from './containers/Login/Login'
import Reg from './containers/Reg/Reg'
import {BrowserRouter,Route,Redirect,Switch,Link} from 'react-router-dom'
import TabBar from "./components/TabBar/TabBar";
import './static/css/common/index.less'
import store from './store/index'
import {Provider} from 'react-redux'
import PrivateRoute from './PrivateRoute'
import Detail from './containers/Detail/Detail'
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    {/*默认跳转到Home*/}
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/profile' component={Profile}></Route>
                    {/*lesson进行权限校验,如果没权限需要跳转到login进行登录,成功后再跳回来*/}
                    <PrivateRoute path='/lesson' component={Lesson}></PrivateRoute>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/reg' component={Reg}></Route>
                    <Route path='/detail/:id' component={Detail}></Route>
                </Switch>
                <TabBar/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)