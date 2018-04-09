import React from 'react'
import HomeHeader from "./HomeHeader"
import './index.less'
import actions from '../../store/actions/home'
import {connect} from 'react-redux'
import HomeSlider from './HomeSlider'
import HomeList from "./HomeList";
import {loadMore} from "../../util"
class Home extends React.Component{
    componentDidMount(){
        this.props.setSliders()
        this.props.setLessons() //获取课程信息
        loadMore(this.x,this.props.setLessons)
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
                <div className="content" ref={x=>this.x=x}>
                    {!this.props.slider.loading?<HomeSlider lists={this.props.slider.list} />:<div>正在加载中</div>}
                    <div className="container">
                        <h3>
                            <i className="book-icon"></i> 我的课程
                        </h3>
                        <HomeList lists={this.props.lesson.list}/>
                        {this.props.lesson.loading?<div>正在加载</div>:null}
                        <button onClick={()=>{
                            this.props.setLessons()
                        }}>加载更多</button>
                    </div>
                </div>
            </div>
        )
    }
}
//mapStateToProps:将redux中的数据映射到当前组件的实现
//store.getState()={home:{currentLessonType:'0'}}
export default connect((state)=>({...state.home}),actions)(Home)