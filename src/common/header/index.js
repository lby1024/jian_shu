import React from 'react'
import { connect } from "react-redux"
import {actions} from './store/reducer.js'
import { withRouter } from 'react-router-dom';
import Slide from './slide'

import { Btns, Logo, Nav, Wrapper, Input, Hot } from './style.js'

class Head extends React.Component {
    state = {
        mouse_in: false,    // 鼠标是否在热门搜索的卡片上面
        number: 0,          // 热门搜索的页码---> 换一批 ---> number++
        deg: 0
    }
    // 跳转到 ---> 首页
    turn2home = () => {
        this.props.history.replace('/')
    }
    componentDidMount () {
        this.props.search_hot()     // 获取热门搜索数据
    }
    // 鼠标移入 ---> 热门搜索版
    mouse_in = () => this.setState({mouse_in: true})
    // 鼠标移出 ---> 热门搜索版
    mouse_out = () => this.setState({mouse_in: false})
    // 点击热门搜索的 ---> 换一批
    change_page = () => {
        let page_total = this.props.hot_tags.length     // 热门搜索---> 总共有几页
        let number = this.state.number
        let deg = this.state.deg
        number++
        deg -= 720
        if (number>page_total-1) number=0
        this.setState({number, deg})
    }

    render () {
        let {mouse_in,number, deg} = this.state
        let {is_focus, change_input, hot_tags} = this.props

        // search ---> 热门标签
        let dom_tags = hot_tags[number].map((item, index)=>
            <span key={index} className='tag'>{item}</span>
        )
        // search ---> 热门搜索卡片 = 热门标签 × n
        let dom_hot = ''
        if (mouse_in||is_focus) dom_hot =  
            <Hot
                onMouseLeave={this.mouse_out}
                onMouseEnter={this.mouse_in}>
                <div className="title">
                    <span>热门搜索</span>
                    <div 
                        className='change'
                        onClick={this.change_page}>
                        <i 
                            style={{transform: `rotate(${deg}deg)`}}
                            className="icon-loading">
                        </i>
                        <span>换一批</span>
                    </div>
                </div>
                <div className="tags">
                    {dom_tags}
                </div>
            </Hot>
        // search ---> 搜索框 = 搜索图标 + input标签 + 热门搜索卡片
        let dom_search = 
            <Input className={is_focus?'focus':''}>
                <input 
                    className="search"
                    onFocus={()=>change_input(true)}
                    onBlur={()=>change_input(false)}
                    placeholder="搜索" 
                    type="text">
                </input>
                <i className="icon-search"></i>
                {dom_hot}
            </Input>


        // ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== 
        return (
            <Wrapper>
                <div className="container">
                    <Logo onClick={this.turn2home} />
                    <Nav>
                        <button className="btn" onClick={this.turn2home} >首页</button>
                        <button className="btn">下载APP</button>
                        {dom_search}
                    </Nav>
                    <Btns>
                        <button className="btn">Aa</button>
                        <button className="btn">登录</button>
                        <button className="btn regist">注册</button>
                        <button className="btn write">写文章</button>
                    </Btns>
                </div>
                <Slide></Slide>
            </Wrapper>
        )
    }
}

const mapStatetoProps = state => {
    let {is_focus, has_data, hot_tags} = state.header
    return {is_focus, has_data, hot_tags}
}
let {change_input, search_hot} = actions
const actionCreators = {change_input, search_hot}

export default connect(mapStatetoProps, actionCreators)(withRouter(Head))