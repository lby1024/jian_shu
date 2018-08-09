import React from 'react'

import {BackWrapper} from './style'

// 返回页面顶部
class Back extends React.Component {

    state = {
        hidden: true
    }

    componentDidMount () {
        window.addEventListener('scroll', this.scroll)
    }

    scroll = () => {
        let top = document.body.scrollTop ||  document.documentElement.scrollTop
        if (top>500) this.setState({hidden: false})
        else this.setState({hidden: true})
    }

    back2top = () => {
        window.scrollTo(0, 0);
    }

    render () {
        if (this.state.hidden) return <div/>
        return <BackWrapper onClick={this.back2top}/>
    }
}

export default Back