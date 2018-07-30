import _ from 'lodash'
import Vue from 'vue'
import axios from 'axios'

let csharpApi = axios.create({
    timeout: 10000,
    baseURL: 'http://localhost:8080/api',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

// 处理axios响应
csharpApi.interceptors.response.use(function (response) {
    return response
}, function (err) {
    return Promise.reject(error)
})

const getShopFull = params => csharpApi.get('/data.json', {
    params: {
        jsonrequest: JSON.stringify(params)
    }
}).then ((rsp) => rsp.data)

export default {
    getShopFull
}