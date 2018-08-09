import React from 'react'
import { withRouter } from 'react-router-dom'

import {Article} from './style.js'

class ArticleList extends React.Component {

    go2detail = id => {
        this.props.history.replace(`/detail/${id}`)
    }
    render () {
        let {list} = this.props
        if (list.length===0) return <div></div>
        let dom_cards = list.map((item, index) => 
            <div className="card" key={index}>
                <h3 onClick={()=>this.go2detail(item.id)}>{item.title}</h3>
                <p>{item.desc}</p>
                <img src={item.imgUrl} alt="pic" draggable="false"/>
                <div className="icons">
                    <span>赵日天</span>
                    <i className="icon i-comment"></i>
                    <span>7</span>
                    <i className="icon i-favorite"></i>
                    <span>34</span>
                    <i className="icon i-good"></i>
                    <span>3</span>
                </div>
            </div>
        )
        return (
            <Article>
                {dom_cards}
            </Article>
        )
    }
}

export default withRouter(ArticleList)