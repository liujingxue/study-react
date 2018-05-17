// 数据源
function createStore(reducer){  // 防止state被改
    let state;
    let listeners = []
    let subscribe = (listener) =>{ // 订阅
        listeners.push(listener)
        return ()=>{
            // 再次调用时，移除监听函数
            listeners = listeners.filter(fn=>fn !== listener)
        }
    }
    let getState = () => JSON.parse(JSON.stringify(state));

    // 派发时应该将修改的动作提交过来
    // dispatch参数是对象 {type:'CHANGE_TITLE_COLOR',color:'red'}
    function dispatch(action){ // 派发的方法，这里要更改状态
        state = reducer(state,action)
        listeners.forEach(listener => listener())
    }
    dispatch({})

    // 将方法暴露给外面使用，将状态放到容器中，外界不能更改
    return {dispatch,getState}

}

let store = createStore(reducer)
// 渲染的方法
function renderTitle(){
    let title = document.querySelector('#title')
    title.style.background = store.getState().title.color
    title.innerHTML = store.getState().title.text
}
// 渲染内容
function renderContent(){
    let content = document.querySelector('#content')
    content.style.background = store.getState().content.color
    content.innerHTML = store.getState().content.text
}
// 渲染的方法
function render(){
    renderTitle()
    renderContent()
}
render()

// 修改状态需要dispatch方法

// 先定义好我要干哪些事情（常量）或者宏
const CHANGE_TITLE_COLOR = 'CHANGE_TITLE_COLOR'
const CHANGE_CONTENT_TEXT = 'CHANGE_CONTENT_TEXT'


setTimeout(()=>{
    store.dispatch({type:CHANGE_CONTENT_TEXT,text:'js'})
    render()
},2000)


// 将定义状态和规则的部分抽离
let initState = {
    title:{
        color:'red',
        text:'标题'
    },
    content:{
        color:'blue',
        text:'内容'
    }
}
// 用户自己定义的规则，我们叫它reducer,我们叫他管理员
// reducer要有两个参数 要根据老的状态和新传递的动作算出新的状态
// 如果想获取默认状态，有一种方式，就是调用reducer,让每一个规则都不匹配将默认返回
// 在reducer中， reducer是一个纯函数
function reducer(state = initState,action){
    switch(action.type){
        case CHANGE_TITLE_COLOR:
            return {...state,title:{...state.title,color:action.color}}
            break;
        case CHANGE_CONTENT_TEXT:
            // action.text属性是你调用dispatch方法自己定义好的
            return {...state,content:{...state.content,text:action.text}}
            break;
        default:
            return state;
    }
}