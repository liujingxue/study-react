import React from 'react'
import './index.less'
import Header from '../../components/Header/Header'
class Detail extends React.Component{
    render(){
        console.log(this.props.match.params.id);
        let lesson = this.props.location.state
        if(!lesson){ //如果数据不存在可以进行数据的ajax请求 id传入后台获取最终的数据
            lesson = {}
        }
        console.log(lesson);
        let {video,poster} = lesson;
        return (
            <div className="detail">
                <Header title="详情页"/>
                <video src={video} poster={poster} controls={true}></video>
            </div>
        )
    }
}
export default Detail