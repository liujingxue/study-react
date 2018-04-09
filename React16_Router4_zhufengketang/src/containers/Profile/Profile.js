import React from 'react'
import './index.less'
import {Link} from 'react-router-dom'
class Profile extends React.Component{
    render(){
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src="/src/static/images/login_bg.jpg" alt="" />
                    <div className="avatar">
                        <img src="/src/static/images/avatar.png" alt="" />
                    </div>
                    <Link to="/login" className="btn">登录</Link>
                </div>
            </div>
        )
    }
}
export default Profile