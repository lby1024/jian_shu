import axios from 'axios'
import urls from './url.js'

import home_data from "./data_home.js"
import detail_data from './data_detail.js'
// 获取热门搜索数据
export function get_hot (data) {
    return new Promise((resolve, reject) => {
        axios({
            url: urls.hot,              
            method: 'get',
            baseURL: urls.easy_mock,    // https://www.easy-mock.com/mock/5b5dc7fa9b54da5dcc7d1844/offo
            timeout: 9000,              // 如果请求超过 5 秒, 请求将会被终断
            params: data                // 传参
        })
        .then(res=>{
            if (res.status===200&&res.data.success) resolve(res.data.data) 
        })
        .catch(err=>reject(err))
    })
}

// 获取主页数据
export function get_home_data (data) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (home_data.success) resolve(home_data.data)
        },1500)
    })
}

// 获取主页更多文章列表
export function get_article_list () {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (home_data.success) resolve(home_data.data.articleList)
        }, 800)
    })
}
// 获取详情页 数据
export function get_detail_data () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (detail_data.success) resolve(detail_data.data)
        }, 800)
    })
}




