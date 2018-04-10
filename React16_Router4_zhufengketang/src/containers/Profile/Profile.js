import React from 'react'
import './index.less'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
class Profile extends React.Component{
    componentDidMount(){
        this.props.toValidate()
    }
    render(){
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src="/src/static/images/login_bg.jpg" alt="" />
                    <div className="avatar">
                        <img src="/src/static/images/avatar.png" alt="" />
                    </div>
                    {this.props.user?<a className="btn">{this.props.user}</a>:<Link to="/login" className="btn">登录</Link>}
                </div>
            </div>
        )
    }
}
export default connect(state=>({...state.session}),actions)(Profile)