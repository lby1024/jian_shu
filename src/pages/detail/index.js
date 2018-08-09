import React from 'react'
import {DetailWrapper, Content} from './style'
import {get_detail_data} from '../../api/get_data'

class Detail extends React.Component {
    state = {
        title: null,
        content: null
    }

    componentDidMount () {
        get_detail_data().then(res => {
            let title = res.title
            let content = res.content
            this.setState({title, content})
        })
    }
    
    render () {
        let {title, content} = this.state
        if (!title) return <DetailWrapper/>
        return (
            <DetailWrapper>
                <h3>{title}</h3>
                <Content
                    dangerouslySetInnerHTML={{__html: content}}>
                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail