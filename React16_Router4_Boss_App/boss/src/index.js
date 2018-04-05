import {createStore} from 'redux';
//1.新建store
//通过reducer建立
//根据老的state和action 生成新的状态
function counter(state=0,action){
    switch(action.type){
        case '加':
            return state+1
        case '减':
            return state-1
        default:
            return 10
    }
}
//1.新建store
const store = createStore(counter)
const init = store.getState()
console.log(init); //10
function listener(){
    const current = store.getState()
    console.log(`现在有机枪${current}`);
}
//订阅,相当于每一次都会触发listener方法
store.subscribe(listener)
//派发事件，传递action
store.dispatch({type:'加'})
console.log(store.getState()); //11
store.dispatch({type:'减'})
console.log(store.getState()); //10