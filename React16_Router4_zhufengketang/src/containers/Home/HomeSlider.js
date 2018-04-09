//轮播图组件
import React from 'react'
import ReactSwipe from 'react-swipe'
class HomeSlider extends React.Component{
    constructor(){
        super()
        this.state = {index:0}
    }
    render(){
        // console.log(this.props.lists);
        let opts = {continuous:true,auto:3000,transitionEnd:(index)=>{
            // console.log(index)
            this.setState({index})
        }}
        return (
            <div className="home-slider">
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    {this.props.lists.map((item,index)=>(
                        <div key={index}>
                            <img src={item} alt=""/>
                        </div>
                    ))}
                </ReactSwipe>
                <ul className="home-slider-dots">
                    {this.props.lists.map((item,index)=>(
                        <li key={index} className={index===this.state.index?'active':''}>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default HomeSlider