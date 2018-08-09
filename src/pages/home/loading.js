import React from 'react'
import load from '../../static/images/loading.gif'
import { LoadingWrapper } from './style.js'

// 参数
// this.props.load ------> 加载动画的显示
class Loading extends React.Component {
    render () {
        if (this.props.load===false) return <div></div>
        return (
            <LoadingWrapper>
                <img src={load} alt="loading..." />
            </LoadingWrapper>
        )
    }
}

export default Loading