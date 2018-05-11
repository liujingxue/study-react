/**
 * Created by Administrator on 2018/5/11.
 */

import React,{Component} from 'react';
import {Row, Col, Icon, message} from 'antd';
import user from '../../service/user';
import {withRouter} from 'react-router-dom';
class Header extends Component{
    state = {
        username:''
    }
    componentWillMount(){
        let username = sessionStorage.getItem('username');
        this.setState({ username });
    }
    logout = () =>{
        user.signout().then(data=>{
           if(data.code == 0){
               sessionStorage.removeItem('username');
               this.props.history.push('/'); //跳转到登录页
           } else{
               message.error('退出登录失败');
           }
        });
    }
    render(){
        return (
            <Row className="admin-header">
                <Col span="2" />
                <Col span="6">
                    <h2>My Blog</h2>
                </Col>
                <Col span="14">
                    <div className="admin-right">
                        欢迎 {this.state.username}
                        &nbsp;
                        <a onClick={this.logout}><Icon type="logout" />退出</a>
                    </div>
                </Col>
                <Col span="2" />
            </Row>
        )
    }
}

//用withRouter包起来，让Header组件有history属性
export default withRouter(Header);