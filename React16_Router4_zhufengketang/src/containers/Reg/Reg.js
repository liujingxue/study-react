import React from 'react'
import './index.less'
import Header from "../../components/Header/Header";
class Reg extends React.Component{
    render(){
        return (
            <div className="login">
                <Header title="注册"/>
                <ul className="container">
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li><button>注册</button></li>
                </ul>
            </div>
        )
    }
}
export default Reg