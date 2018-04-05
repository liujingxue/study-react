import React from 'react'
import {connect} from 'react-redux'
// import {login} from './Auth.redux'

//两个reducers,每个reducers都有一个state
//
//@connect写法
@connect(
    state=>state
)
class Auth extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return <h2>this is Auth</h2>
    }
}

export default Auth