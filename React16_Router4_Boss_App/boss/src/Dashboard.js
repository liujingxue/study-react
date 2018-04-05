import React from 'react'
import {Link,Route} from 'react-router-dom'
import App from './App'

//自定义组件
function two(){
    return <h2>第二个组件</h2>
}
function three(){
    return <h2>第三个组件</h2>
}

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const match = this.props.match
        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>one</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/two`}>two</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/three`}>three</Link>
                    </li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}></Route>
                <Route path={`${match.url}/two`} component={two}></Route>
                <Route path={`${match.url}/three`} component={three}></Route>
            </div>
        )
    }
}

export default Dashboard


