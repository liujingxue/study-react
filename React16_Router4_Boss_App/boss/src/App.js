import React from 'react'
import {connect} from 'react-redux'
import {add,remove,addAsync} from "./index.redux";



// @connect(mapStatetoProps,actionCreators)
class App extends React.Component{
    render(){
        return (
            <div>
                <h1>现在有枪{this.props.num}</h1>
                <button onClick={this.props.add}>加</button>
                <button onClick={this.props.remove}>减</button>
                <button onClick={this.props.addAsync}>等2秒再加</button>
            </div>
        )


    }
}

const mapStatetoProps = (state) => {
    return {num:state}
}
const actionCreators = {add,remove,addAsync}
App = connect(mapStatetoProps,actionCreators)(App)

export default App