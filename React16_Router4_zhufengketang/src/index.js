import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home/Home'
import Profile from './containers/Profile/Profile'
import Lesson from './containers/Lesson/Lesson'
import {BrowserRouter,Route,Redirect,Switch,Link} from 'react-router-dom'
import TabBar from "./components/TabBar/TabBar";
import './static/css/common/index.less'

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
            <TabBar/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
)