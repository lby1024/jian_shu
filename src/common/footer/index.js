import React from 'react'
import {FooterWrapper} from './style.js'

class Footer extends React.Component {

    render () {
        return (
            <FooterWrapper>
                <span>关于简书 @ </span>
                <span> 联系我们 @ </span>
                <span> 加入我们 @ </span>
                <span> 简书出版 @ </span>
                <span> 品牌与徽标 @ </span>
                <span> 帮助中心 @ </span>
                <span> 合作伙伴 </span>
            </FooterWrapper>
        )
    }
}

export default Footer