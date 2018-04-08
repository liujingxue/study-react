import React from 'react'
import HomeHeader from "./HomeHeader"
import './index.less'
import actions from '../../store/actions/home'
import {connect} from 'react-redux'
class Home extends React.Component{
    componentDidMount(){
        this.props.setSliders()
    }
    changeSonType=(value)=>{ //传给子组件。
        //可以拿到子页面的参数。可以拿到点击的是那个。
        // console.log(value);
        this.props.setCurrentLesson(value)
    }
    render(){
        return (
            <div>
                <HomeHeader changeSonType={this.changeSonType}/>
                <div className="content">
                    轮播图
                </div>
            </div>
        )
    }
}
//mapStateToProps:将redux中的数据映射到当前组件的实现
//store.getState()={home:{currentLessonType:'0'}}
export default connect((state)=>({...state.home}),actions)(Home)