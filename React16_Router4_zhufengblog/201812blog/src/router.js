/**
 * Created by Administrator on 2018/5/10.
 */

import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';

//函数组件
function Admin(){
    return <div>Admin</div>;
}
export default class Routers extends Component{
    // HashRouter是最外层包裹的
    // Switch是只匹配一个,最多只渲染一个
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/admin" component={Admin} />
                </Switch>
            </Router>
        )
    }
}

