import React from 'react'
import {Link} from 'react-router-dom'
class HomeList extends React.Component{
    render(){
        console.log(this.props.lists);
        return (
            <div className="home-list">
                <ul>
                    {this.props.lists.map((item,index)=>(
                        <li key={index}>
                            <Link to={{pathname:'/detail/'+item.id,state:item}}>
                                <img src={item.url} alt=""/>
                                <p>{item.title}</p>
                                <span>{item.price}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default HomeList