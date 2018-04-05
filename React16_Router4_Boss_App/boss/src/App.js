import React from 'react'
class App extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const store = this.props.store
        const num = store.getState()
        const add = this.props.add
        const remove = this.props.remove
        return (
            <div>
                <h1>现在有枪{num}</h1>
                <button onClick={()=>store.dispatch(add())}>加</button>
                <button onClick={()=>store.dispatch(remove())}>减</button>
            </div>
        )


    }
}
export default App