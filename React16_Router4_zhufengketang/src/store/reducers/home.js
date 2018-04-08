import * as Types from '../action-types'

let initState = {
    currentLesson:'0',   //默认为0,即全部课程
    slider:{
        loading:false,
        list:[]
    }
}
export default function home(state=initState,action){
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.lesson}
        case Types.GET_SLIDERS:
            return {...state,slider:{...state.slider,loading:true}}
        case Types.GET_SLIDERS_SUCCESS:
            return {...state,slider:{loading:false,list:action.payload}}
    }
    return state;
}