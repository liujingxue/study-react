/**
 * Created by Administrator on 2018/5/10.
 */

import React,{Component} from 'react';
import {Form, Input, Icon, Button} from 'antd';
export default class Home extends Component{
    handleSubmit(){

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
    //校验
    checkUsername = () => {

    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <Form>
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
                <Form.Item>
                    {
                        //取表单值
                        getFieldDecorator('email',{
                            //校验规则
                            rules:[{required:true,message:'请输入邮箱'}]
                        })(<Input type="email" prefix={<Icon type="mail" style={{color:'rgba(0,0,0,.25)'}} />} placeholder="请输入邮箱"/>)
                    }
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        className="login-form-button">注册</Button>
                </Form.Item>
            </Form>
       )
    }
}
const WrappedUserForm = Form.create()(UserForm);