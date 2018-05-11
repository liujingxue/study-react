/**
 * Created by Administrator on 2018/5/11.
 */


import {get, post, put ,del} from './index';

const ENTITY = '/api/users';

//注册
function signup(data){  // data={username,password,email}
    return post(`${ENTITY}/signup`, data);
}

//登录
function signin(data){
    return post(`${ENTITY}/signin`, data);
}

//退出
function signout(){
    return get(`${ENTITY}/signout`);
}

export default {
    signup,signin,signout
}