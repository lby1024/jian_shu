import React from 'react'
import carousel01 from '../../static/images/carousel-1.jpg'
import carousel02 from '../../static/images/carousel-2.jpg'
import carousel03 from '../../static/images/carousel-3.jpg'
import {Carousel} from 'antd'

class Swiper extends React.Component {
    state = {
        style_img: {
            width: '100%',
            borderRadius: '9px'
        },
        style_null: {
            height: '270px',
            borderRadius: '9px',
            backgroundColor: '#F3F3F3'
        }
    }
    
    render () {
        let {style_img, style_null} = this.state
        if (this.props.load) return <div style={style_null}></div>
        return (
            <Carousel autoplay>
                <div><img src={carousel01} alt="pic" style={style_img} /></div>
                <div><img src={carousel02} alt="pic" style={style_img} /></div>
                <div><img src={carousel03} alt="pic" style={style_img} /></div>
            </Carousel>
        )
    }
}

export default Swiper