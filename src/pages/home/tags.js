import React from 'react'

import { TagsWrapper } from './style.js'

class Tags extends React.Component {
    
    render () {
        let {list} = this.props
        if (list.length===0) return <div></div>
        let dom_tags = list.map(item=>
            <span key={item.title} className="tag">
                <img src={item.imgUrl} alt='pic' draggable="false"/>
                <span>{item.title}</span>
            </span>
        )

        return (
            <TagsWrapper>
                {dom_tags}
                <span className="more">更多热门专题 > </span>
            </TagsWrapper>
        )
    }
}

export default Tags