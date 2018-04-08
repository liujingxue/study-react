//创建关于首页更改redux的所有动作
import * as Types from '../action-types'
let action = {
    setCurrentLesson(lessontype){
        return {type:Types.SET_CURRENT_LESSON,lesson:lessontype}
    }
}

export default action