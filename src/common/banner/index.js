import React from 'react'
import { withRouter } from 'react-router-dom'
import {BannerWrapper} from './style'

import pic_download from '../../static/images/down.png'

class Banner extends React.Component {

    tur2hot = (id) => {
        this.props.history.replace(`hot/${id}`)
    }

    render () {
        if (!this.props.list.length) return <div/>

        let dom_img = this.props.list.map((item, index)=>
                <img 
                    src={item.imgUrl} 
                    alt="banner" 
                    key={index}
                    onClick={()=>this.tur2hot(index)}
                />
        )

        return (
            <BannerWrapper>
                {dom_img}
                <div className="download">
                    <img src={pic_download} alt='pic' className="small"/>
                    <h3>下载简述手机app</h3>
                    <p>随时随地发现和创作内容</p>
                    <div className="big">
                        <img src={pic_download} alt='pic' width="100%"/>
                    </div>
                </div>
            </BannerWrapper>
        )
    }
}

export default withRouter(Banner)