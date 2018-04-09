//创建关于首页更改redux的所有动作
import * as Types from '../action-types'
import {getSliders,getLessons} from '../../api/home'
let action = {
    setCurrentLesson(lessontype){
        return {type:Types.SET_CURRENT_LESSON,lesson:lessontype}
    },
    setSliders(){
        return (dispatch)=>{ //dispatch是中间件包装后的dispatch
            dispatch({type:Types.GET_SLIDERS});  //将redux中数据状态改变成正在加载
            dispatch({type:Types.GET_SLIDERS_SUCCESS,payload:getSliders()})
        }
    },
    setLessons(){
        return (dispatch,getState)=>{ //store.getState()
            let {currentLesson,lesson:{limit,offset,hasMore,loading}} = getState().home
            //先把loading改成正在加载
            if(hasMore && !loading){
                dispatch({type:Types.GET_LESSONS}) //先将loading状态改变
                dispatch({type:Types.GET_LESSONS_SUCCESS,payload:getLessons(limit,offset,currentLesson)})
            }
        }
    }
}

export default action