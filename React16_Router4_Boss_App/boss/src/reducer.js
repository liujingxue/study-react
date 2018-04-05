//合并所有的reducer 并且返回
import { combineReducers } from 'redux'
import {counter} from './index.redux'
import {auth} from './Auth.redux'

//使用combineReducers将两个redux文件中的counter和auth合并
export default combineReducers({counter,auth})