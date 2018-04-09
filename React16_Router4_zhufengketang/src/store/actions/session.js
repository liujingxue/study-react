import * as Types from '../action-types'
import {reg,login} from '../../api/session'
let actions = {
    toReg(userInfo,push){ //注册
        return (dispatch)=>{
            reg(userInfo).then((result)=>{
                if(result.err===1){ //有错误
                    dispatch({type:Types.SET_USER_INFO,payload:result})
                }else{
                    console.log('注册成功，页面跳转')
                    push('/login') //页面跳转
                }
            })

        }
    },
    toLogin(userInfo,push){ //登录
        return (dispatch)=>{
            login(userInfo).then((result)=>{
                dispatch({type:Types.SET_USER_INFO,payload:result})
                if(result.err===0){
                    console.log('登录成功，页面跳转')
                    push('/profile') //页面跳转
                }
            })
        }
    }
}
export default actions