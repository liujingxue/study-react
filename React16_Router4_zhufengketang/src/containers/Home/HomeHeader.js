import React from 'react'
import Transition from 'react-transition-group/Transition'
const duration = 300    //延迟时间
const defaultStyle = {  //默认动画样式
    transition: `opacity ${duration}ms ease-in-out`,
    opacity:0,
    display:"none"
}
const transitionStyles = { //进入之前的样式，和进入之后的样式
    entering: {opacity:0},
    entered:{opacity:1}
}
class HomeHeader extends React.Component{
    constructor(){
        super();
        this.state={isShow:false}
    }
    changeShow=()=>{
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render(){
        return (
            <div className="home-header">
                <div className="home-header-top">
                    <img src="/src/static/images/logo.png" alt=""/>
                    <div className="home-header-btn" onClick={()=>{this.changeShow()}}>
                        {this.state.isShow?<i className="header-delete"></i>:<i className="header-list"></i>}
                    </div>
                </div>

                <Transition in={this.state.isShow} timeout={duration} onEnter={(node)=>{
                    node.style.display = 'block'
                }} onExited={(node)=>{
                    node.style.display = 'none'
                }} >

                    {
                        (state)=>(
                            <ul className="home-header-list" style={{...defaultStyle,...transitionStyles[state]}}>
                                <li>全部课程</li>
                                <li>react课程</li>
                                <li>vue课程</li>
                            </ul>
                        )
                    }

                </Transition>





            </div>
        )
    }
}
export default HomeHeader