import styled from 'styled-components'

export const BannerWrapper = styled.div`
    img{
        width: 100%;
        display: inline-block;
        margin-bottom: 9px;
        cursor: pointer;
    }
    .download{
        .big{
            width: 150px;
            height: 150px;
            position: absolute;
            top: -160px;
            left: 60px;
            background-color: #fff;
            border: 3px solid #f9f9f9;
            padding: 9px;
            box-sizing: border-box;
            border-radius: 9px;
            box-shadow: 0 9px 9px #f3f3f3;
            visibility: hidden;
            &::after{
                content: '';
                position: absolute;
                left: 55px;
                bottom: -15px;
                display: inline-block;
                border-top: 15px solid #fff;  // transparent==>>透明
                border-left: 15px solid transparent;
                border-right: 15px solid transparent;
            }
        }
        .small{
            width: 60px;
            height: 60px;
            margin: 0;
            position: absolute;
            top: 6px;
            left: 6px;
        }
        p{
            color: #999;
            font-size: 12px;
            margin: 0;
        }
        h3{
            margin: 0;
            margin-bottom: 6px;
            font-size: 16px;
        }
        border: 1px #dcdcdc solid;
        box-sizing: border-box;
        padding: 12px 12px 12px 82px;
        position: relative;
        border-radius: 6px;
        cursor: pointer;
        &:hover{
            .big{
                visibility: visible;
            }
        }

    }
`

