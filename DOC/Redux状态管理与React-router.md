## 一、Redux是什么

专注于状态管理的库

* Redux专注于状态管理，和react解耦
* 单一状态，单向数据流
* 核心概念：store, state, action, reducer

* 首先通过reducer新建store,随时通过store.getState获取状态
* 需要状态变更, store.dispatch(action)来修改状态
* Reducer函数接受state和action,返回新的state,可以用store.subscribe监听每次修改

```
//安装redux
npm i redux --save

//Redux最基本的使用
//index.js
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

```

Redux如何和React一起用

* 把



## 二、Redux核心概念

## 三、Redux实战