import React from 'react'
import './index.less'
import {withRouter} from 'react-router-dom'
class Header extends React.Component{
    componentDidMount(){
        console.log(this.props);
    }
    back=()=>{
        this.props.history.go(-1)
    }
    render(){
        return (
            <div className="nav-header">
                <i className="back-icon" onClick={this.back}></i>
                {this.props.title}
            </div>
        )
    }
}
export default withRouter(Header)