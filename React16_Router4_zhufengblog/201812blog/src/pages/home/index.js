/**
 * Created by Administrator on 2018/5/10.
 */

import React,{Component} from 'react';
import {Form, Input, Icon, Button, Popconfirm, Modal,message} from 'antd';
import service from '../../service/user';
export default class Home extends Component{
    handleSubmit = (isSignUp, user) => {
        //console.log(user);
        service[isSignUp ? 'signup' : 'signin'](user).then(res=>{
          if(res.code == 0){
              this.props.history.push('/admin'); //页面跳转
          }else{
              message.error(res.error);
          }
        })
    }
    render(){
        return (
            <div className="home-page">
                <div className="login-form">
                    <h1>欢迎光临我的博客</h1>
                    <WrappedUserForm onSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

class UserForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isSignUp:true, //默认是一个注册表单
        };
    }
    //校验
    checkUsername = (value, record,callback) => {
        if(!value){
            callback('用户名不能为空');
        } else{
            callback();
        }
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={(e)=>{
                e.preventDefault();
                this.props.onSubmit(
                    this.state.isSignUp,
                    this.props.form.getFieldsValue() //获取表单字段的值
                )
            }}>
                <Form.Item>
                    {
                        //取表单值
                        getFieldDecorator('username',{
                            //校验规则
                            //prefix是放置图标的
                            rules:[{validator:this.checkUsername},{required:true,message:'请输入用户名'}]
                        })(<Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />} placeholder="请输入用户名"/>)
                    }
                </Form.Item>
                <Form.Item>
                    {
                        //取表单值
                        getFieldDecorator('password',{
                            //校验规则
                            rules:[{required:true,message:'请输入密码'}]
                        })(<Input type="password" prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}} />} placeholder="请输入密码"/>)
                    }
                </Form.Item>

                { //如果是注册状态的话，执行&&后面的， 就显示email表单
                    this.state.isSignUp && <Form.Item>
                        {
                            //取表单值
                            getFieldDecorator('email',{
                                //校验规则
                                rules:[{required:true,message:'请输入邮箱'}]
                            })(<Input type="email" prefix={<Icon type="mail" style={{color:'rgba(0,0,0,.25)'}} />} placeholder="请输入邮箱"/>)
                        }
                    </Form.Item>
                }


                <Form.Item>
                    <Button
                        htmlType="submit"
                        className="login-form-button">
                        {this.state.isSignUp ? '注册':'登录'}
                    </Button>
                    &nbsp;<a onClick={()=>this.setState({isSignUp: !this.state.isSignUp })}>{this.state.isSignUp ? '已有账号，直接登录?' : '没有账号，请注册'}</a>
                </Form.Item>
            </Form>
       )
    }
}
const WrappedUserForm = Form.create()(UserForm);