import React from 'react'
import {SlideWarpper} from './style'

class Slide extends React.Component {

    state = {
        show: false
    }

    show_hidden = () => {
        let show = !this.state.show
        this.setState({show})
    }

    render () {
        let show = this.state.show?'show':''
        return (
            <SlideWarpper className={show}>
                <div className="btns">
                    <div className="btn">首页</div>
                    <div className="btn">下载app</div>
                    <div className="btn">
                        <input type="text" placeholder="搜索"/>
                    </div>
                </div>
                <button
                    onClick={this.show_hidden}
                ></button>
            </SlideWarpper>
        )
    }
}

export default Slide