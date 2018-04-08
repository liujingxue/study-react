import {createStore} from 'redux'
import reducer from './reducers/index'

//store.getState = {home:{currentLesson:'0'}}
let store = createStore(reducer)
//为了调试方便
window._store = store;

export default store