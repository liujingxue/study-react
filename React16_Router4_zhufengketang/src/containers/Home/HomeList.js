import React from 'react'
class HomeList extends React.Component{
    render(){
        console.log(this.props.lists);
        return (
            <div>
                <ul>
                    {this.props.lists.map((item,index)=>(
                        <li key={index}>
                            <img src="" alt=""/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default HomeList