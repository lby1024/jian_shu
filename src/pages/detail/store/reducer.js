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
}
// mutations======mutations======mutations======mutations======mutations======
const mutations = {
    // 显示加载动画
    show_loading (state, payload) {
        let loading = payload.loading
        return {...state, loading}
    }
}

// actions======actions======actions======actions======actions======actions======
export const actions = {

    // 将loading 组件显示出来
    show_loading (payload) {
        return {type: 'show_loading', loading: true}
    }
}
