/**
 * Created by Administrator on 2018/5/11.
 */

//公共方法

import axios from 'axios';
const baseURL = "http://127.0.0.1:7001";
const config = {
    baseURL,
    timeout:8000,
    withCredentials:true //跨域请求的时候携带cookie
}
export function get(url){
    // /user  http://127.0.0.1:7001/user
    return axios({
        ...config,
        method:'get',
        url,
    }).then(res=>res.data); //只取数据
}
export function post(url,data){
    return axios({
        ...config,
        method:'post',
        data,
        url,
    }).then(res=>res.data); //只取数据
}
export function put(url,data){
    return axios({
        ...config,
        method:'put',
        data,
        url,
    }).then(res=>res.data); //只取数据
}
export function del(url,data){
    return axios({
        ...config,
        method:'delete',
        data,
        url,
    }).then(res=>res.data); //只取数据
}
