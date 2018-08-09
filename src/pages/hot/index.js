import React from 'react'
import { connect } from "react-redux"
import {actions} from './store/reducer.js'

import ArticleList from '../home/card'
import Container from '../../common/container'
import Users from '../../common/users'
import Tittle from '../../common/title'


class Home extends React.Component {
    componentDidMount () {
        this.props.show_loading()   // 将loading组件显示出来 
        this.props.home_data()      // 向后台发送请求, 获取主页面的数据 ---成功---> 隐藏loading
    }
    // 加载更多文章
    load_more = () => {
        this.props.show_loading()   // 显示加载动画
        this.props.more_article()   // 先后台获取数据 ---成功---> 隐藏加载动画
    }

    render () {
        let { articleList, loading, users, recommendList} = this.props
        let id = this.props.match.params.id
        if (recommendList.length===0) return <div/>
        // 左边的组件
        let left = [
            <Tittle src={recommendList[id].imgUrl} key={0} />,
            <ArticleList list={articleList}  key={1} />
        ]
        // 右边的组件
        let right = [
            <Users list={users} key={0} />
        ]
        return (
            <Container
                left={left}
                right={right}
                loading={loading}
                more={this.load_more}
            ></Container>
        )
    }
}

const mapStatetoProps = state => {
    let {  recommendList, articleList, users, loading } = state.hot
    return {  recommendList, articleList, users, loading }
}
let {home_data, show_loading, more_article} = actions
const actionCreators = {home_data, show_loading, more_article}

export default connect(mapStatetoProps, actionCreators)(Home)