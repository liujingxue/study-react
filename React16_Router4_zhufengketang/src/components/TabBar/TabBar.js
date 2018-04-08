import React from 'react'
import './index.less'
import {NavLink} from 'react-router-dom'
class TabBar extends React.Component{
    render(){
        return (
            <nav className="nav-bar">
                <NavLink to="/home">
                    <i className="tabbar-icon home-icon"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/lesson">
                    <i className="tabbar-icon lesson-icon"></i>
                    <span>我的课程</span>
                </NavLink>
                <NavLink to="/profile">
                    <i className="tabbar-icon profile-icon"></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}
export default TabBar