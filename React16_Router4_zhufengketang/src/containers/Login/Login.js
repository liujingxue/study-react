import React from 'react'
import './index.less'
import Header from "../../components/Header/Header"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
import Alert from "../../components/Alert/Alert"
class Login extends React.Component{
    componentDidMount(){
        console.log(this.props.location.state.from);
    }
    login(){
        let from = this.props.location.state && this.props.location.state.from
        this.props.toLogin({username:this.username.value,password:this.password.value},this.props.history.push,from)
    }
    render(){
        return (
            <div className="login">
                <Header title="登录"/>
                <ul className="container">
                    <li><input type="text" ref={(username)=>this.username=username}/></li>
                    <li><input type="text" ref={(password)=>this.password=password}/></li>
                    <li><Link to="/reg">前往注册</Link></li>
                    <li><button onClick={this.login.bind(this)}>登录</button></li>
                    <li><Alert/></li>
                </ul>
            </div>
        )
    }
}
export default connect(state=>({...state.session}),actions)(Login)