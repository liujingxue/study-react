import React from 'react'
import './index.less'
import Header from "../../components/Header/Header";
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
class Reg extends React.Component{
    reg(){
        this.props.toReg({username:this.username.value,password:this.password.value},this.props.history.push)
    }
    render(){
        return (
            <div className="login">
                <Header title="注册"/>
                <ul className="container">
                    <li><input type="text" ref={(username)=>this.username=username}/></li>
                    <li><input type="text" ref={(password)=>this.password=password}/></li>
                    <li><button onClick={this.reg.bind(this)}>注册</button></li>
                </ul>
            </div>
        )
    }
}
export default connect(state=>({...state.session}),actions)(Reg)