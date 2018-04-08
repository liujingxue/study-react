//创建关于首页更改redux的所有动作
import * as Types from '../action-types'
import {getSliders} from '../../api/home'
let action = {
    setCurrentLesson(lessontype){
        return {type:Types.SET_CURRENT_LESSON,lesson:lessontype}
    },
    setSliders(){
        return (dispatch)=>{ //dispatch是中间件包装后的dispatch
            dispatch({type:Types.GET_SLIDERS});  //将redux中数据状态改变成正在加载
            dispatch({type:Types.GET_SLIDERS_SUCCESS,payload:getSliders()})
        }
    }
}

export default action