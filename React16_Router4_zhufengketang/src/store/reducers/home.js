import * as Types from '../action-types'

let initState = {
    currentLesson:'0'   //默认为0,即全部课程
}
export default function home(state=initState,action){
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.lesson}
    }
    return state;
}