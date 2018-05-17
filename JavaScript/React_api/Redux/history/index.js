// 数据源
let state = {
    title:{
        color:'red',
        text:'标题'
    },
    content:{
        color:'blue',
        text:'内容'
    }
}

// 渲染的方法
function renderTitle(){
    let title = document.querySelector('#title')
    title.style.background = state.title.color
    title.innerHTML = state.title.text
}
// 渲染内容
function renderContent(){
    let content = document.querySelector('#content')
    content.style.background = state.content.color
    content.innerHTML = state.content.text
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


// 派发时应该将修改的动作提交过来
// dispatch参数是对象 {type:'CHANGE_TITLE_COLOR',color:'red'}
function dispatch(action){ // 派发的方法，这里要更改状态
    switch(action.type){
        case CHANGE_TITLE_COLOR:
            state.title.color = action.color
            break;
        case CHANGE_CONTENT_TEXT:
            // action.text属性是你调用dispatch方法自己定义好的
            state.content.text = action.text
            break;
        default:
            break;
    }
}

dispatch({type:CHANGE_CONTENT_TEXT,text:'js'})
render()