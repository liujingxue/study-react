
//获取数据的方法
import axios from 'axios'
//默认请求地址
axios.defaults.baseURL = 'http://localhost:3000'
//允许携带cookie
axios.defaults.withCredentials = true
//配置一下拦截器
axios.interceptors.response.use(function(res){
    return res.data
})

export default axios