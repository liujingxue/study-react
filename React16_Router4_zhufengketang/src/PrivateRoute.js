//高阶路由
import React from 'react'
import {Route,withRouter} from 'react-router-dom'
import {validate} from './api/session'
class PrivateRoute extends React.Component{
    componentDidMount(){
        //发请求 如果没登录 跳转到登录页
        validate().then(result=>{
            if(!result.user){ //没有登录
                this.props.history.push({
                    pathname:'/login',
                    state:{from:this.props.path}
                })
            }
        })
    }
    render(){
        return (
            <Route {...this.props}/>
        )
    }
}
export default withRouter(PrivateRoute)