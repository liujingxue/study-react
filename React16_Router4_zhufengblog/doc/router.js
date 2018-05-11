/**
 * Created by Administrator on 2018/5/10.
 */

import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Admin from './pages/admin';
export default class Routers extends Component{
    // HashRouter是最外层包裹的, HashRouter内置了history hashHistory
    // Switch是只匹配一个,最多只渲染一个
    render(){
        return (
            <Router                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            >
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/admin" component={Admin} />
                </Switch>
            </Router>
        )
    }
}



