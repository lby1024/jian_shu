import styled from 'styled-components'

import comments from '../../static/images/comment.png'
import favorite from '../../static/images/favorite.png'
import good from '../../static/images/good.png'

export const TagsWrapper = styled.div`
    @media (max-width: 625px) {
        display: none;
    }
    background-color: #fff;
    box-sizing: border-box;
    padding: 33px 0;
    border-bottom: 1px #f0f0f0 solid;
    .tag{
        display: inline-block;
        box-sizing: border-box;
        border: 1px solid #ccc;
        height: 32px;
        margin-bottom: 12px;
        margin-right: 36px;
        padding-right: 9px;
        border-radius: 6px;
        overflow: hidden;
        background-color: #f7f7f7;
        img{
            margin-right: 9px;
            width: 32px;
        }
    }
    .more{
        display: inline-block;
        box-sizing: border-box;
        height: 32px;
        color: #787878;
        cursor: pointer;
        overflow: hidden;
        transform: translateY(-6px);
        &:hover{
            color: orange;
        }
    }
`
export const Article = styled.div`
    @media (max-width: 625px) {
        .card{
            padding-left: .3rem;
            padding-right: .3rem;
            img{
                display: none;
            }
        }
    }
    @media (min-width: 625px) {
        .card{
            p{
                width: 76%;
            }
        }
    }
    .card{
        border-bottom: 1px #f0f0f0 solid;
        padding-top: 24px;
        padding-bottom: 18px;
        position: relative;
        h3{
            font-size: 18px;
            font-weight: bolder;
            width: 76%;
            &:hover{
                text-decoration: underline;
                cursor: pointer;
            }
        }
        p{
            color: #999;
        }
        img{
            width: 120px;
            border-radius: 9px;
            position: absolute;
            right: 0;
            top: 24px;
        }
        .icons{
            color: #999;
            display: flex;
            align-items: center;
            .icon{
                display: inline-block;
                width: 15px;
                height: 15px;
                margin-left: 9px;
                background-position: center;
                background-size: 80%;
                background-repeat: no-repeat;
            }
            .i-comment{
                background-image: url(${comments});
            }
            .i-good{
                background-image: url(${good});
            }
            .i-favorite{
                background-image: url(${favorite});
            }
        }
    }
`
export const LoadingWrapper = styled.div`
    height: 66px;
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`