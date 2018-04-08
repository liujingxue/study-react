import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers/index'
import reduxThunk from 'redux-thunk'           //使用异步
import reduxPromise from 'redux-promise'       //使用promise
import reduxLogger from 'redux-logger'         //打印日志

//store.getState = {home:{currentLesson:'0'}}
let store = createStore(reducer,applyMiddleware(reduxThunk,reduxPromise,reduxLogger))
//为了调试方便
window._store = store;


export default store