import React from 'react'
import './index.less'
import Header from "../../components/Header/Header"
import {Link} from 'react-router-dom'
class Login extends React.Component{
    render(){
        return (
            <div className="login">
                <Header title="登录"/>
                <ul className="container">
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li><Link to="/reg">前往注册</Link></li>
                    <li><button>登录</button></li>
                </ul>
            </div>
        )
    }
}
export default Login