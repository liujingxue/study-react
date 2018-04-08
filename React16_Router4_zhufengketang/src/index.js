import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home/Home'
import Profile from './containers/Profile/Profile'
import Lesson from './containers/Lesson/Lesson'
import {BrowserRouter,Route,Redirect,Switch,Link} from 'react-router-dom'
import TabBar from "./components/TabBar/TabBar";
import './static/css/common/index.less'
import store from './store/index'
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/home' exact component={Home}></Route>
                    <Route path='/profile' component={Profile}></Route>
                    <Route path='/lesson' component={Lesson}></Route>
                </Switch>
                <TabBar/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)