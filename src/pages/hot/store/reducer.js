import {get_home_data, get_article_list} from '../../../api/get_data.js'


export function reducer (state = state_init , payload) {
    if(mutations.hasOwnProperty(payload.type)){
        return mutations[payload.type](state , payload);
    }
    return state;
}
// state======state======state======state======state======state======state======
const state_init = {
    loading: true,      // 是否在向后台发送请求
    recommendList: [],  // 推荐数据     ---> [{},{},{}...]
    articleList: [],    // 文章数据     ---> [{},{},{}...]
    users: [],          // 推荐作者     ---> [{}, ... ]
}
// mutations======mutations======mutations======mutations======mutations======
const mutations = {
    // 更新主页数据, 隐藏加载动画
    home_data (state, payload) {
        return {...state, ...payload.data}
    },
    // 显示加载动画
    show_loading (state, payload) {
        let loading = payload.loading
        return {...state, loading}
    },
    // 添加更多文章, 隐藏加载动画
    more_article (state, payload) {
        let articleList = [...state.articleList, ...payload.article_list]
        let loading = false
        return {...state, articleList, loading}
    }
}

// actions======actions======actions======actions======actions======actions======
export const actions = {
    // 向后台获取---> 主页数据 ---成功---> 隐藏loading
    home_data (payload) {
        return dispatch => {
            get_home_data().then(res=>{
                let articleList = res.articleList       // 文章数据     ---> [{},{},{}...]
                let recommendList = res.recommendList   // 热门标签数据 ---> [{},{},{}...]
                let users = res.users
                let loading = false                     // 是否在向后台发送请求
                let type = 'home_data'
                let data = { articleList, recommendList, loading, users}
                dispatch({type, data})
            })
        }
    },
    // 将loading 组件显示出来
    show_loading (payload) {
        return {type: 'show_loading', loading: true}
    },
    // 点击阅读更多 ---> 加载更多文章
    more_article (payload) {
        return dispatch => {
            get_article_list().then(res=>{
                let article_list = res
                let type = 'more_article'
                dispatch({type, article_list})
            })
        }
    }
}
