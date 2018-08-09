import {get_hot} from '../../../api/get_data.js'

const state_init = {
    is_focus: false,
    hot_tags: [                                 // 热门标签数据
        ["区块链","三生三世","崔永元","vue",], 
        ["小程序","茶点微小说","萨沙讲史堂"]
    ]        
}

export function reducer (state = state_init , payload) {
    if(mutations.hasOwnProperty(payload.type)){
        return mutations[payload.type](state , payload);
    }
   return state;
}

const mutations = {
    change_input (state, payload) {
        let is_focus = payload.is_focus
        return {...state, is_focus}
    },
    search_hot (state, payload) {
        let hot_tags = payload.hot_tags
        return {...state, hot_tags}
    }
}

export const actions = {
    change_input (payload) {
        let type = 'change_input'
        let is_focus = payload
        return {type, is_focus}
    },
    search_hot (payload) {
        return dispatch=>{
            get_hot()
            .then(res=>{
                let hot_tags = page(res,10)
                let type = 'search_hot'
                dispatch({type, hot_tags})
            })
            .catch(err=>console.log('获取数据失败', err))
        }
    }
}

// 封装的方法======封装的方法======封装的方法======封装的方法======封装的方法======封装的方法======
// 每 10 个一组
// 第一个参数 : 表示将要被分组的 list
// 第二个参数 : 要是每 10 个一组 , number=10
function page (list, number) {
    let page = []
    list.map((item, index) => {
        let num = parseInt(index/number)      
        if (!page[num]) page[num]=[]  // 例如, 如果page[3]不存在, 那就创建一个page[3]=[]
        page[num].push(item)
    })
    return page
}