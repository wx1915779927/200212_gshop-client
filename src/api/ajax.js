import axios from 'axios'
import Nprogress from 'nprogress'
// 配置通用基础路径和超时
const instance = axios.create({
    baseURL: '/api',
    // baseURL: 'http://182.92.128.115/api',
    timeout: 15000
})

//请求拦截器
instance.interceptors.request.use(config => {
    Nprogress.start()
    return config
})

//相应拦截器
instance.interceptors.response.use(response => {
        Nprogress.done()
        return response.data
    },
    error => {
        Nprogress.done()

        //统一处理错误
        alert(error.message || '未知错误')
        //选择处理不处理
        // throw error
        return Promise.reject(error)
    })

export default instance