import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Home from './containers/Home/Home'

function Auth(){
    return 'aa'
}


ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Auth}></Route>
                <Route path='/home' component={Home}></Route>
                <Redirect to='/home'></Redirect>
            </Switch>
        </BrowserRouter>,
    document.getElementById('root')
)

