import React from 'react'
import { connect } from "react-redux"
import {actions} from './store/reducer.js'
import Swiper from './swiper.js'
import Tags from './tags.js'
import ArticleList from './card.js'
import Container from '../../common/container'
import Banner from '../../common/banner'
import Users from '../../common/users'

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
        let {recommendList, articleList, topicList, loading, users} = this.props
        // 左边的组件
        let left = [
            <Swiper load={loading} key={0} />,
            <Tags list={topicList} key={1} />,
            <ArticleList list={articleList}  key={2} />
        ]
        // 右边的组件
        let right = [
            <Banner list={recommendList} key={0} />,
            <Users list={users} key={1} />
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
    let { recommendList, articleList, topicList, users, loading } = state.home
    return { recommendList, articleList, topicList, users, loading }
}
let {home_data, show_loading, more_article} = actions
const actionCreators = {home_data, show_loading, more_article}

export default connect(mapStatetoProps, actionCreators)(Home)