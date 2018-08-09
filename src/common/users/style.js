import styled from 'styled-components'

export const UserWrapper = styled.div`
    margin-top: 36px;
    h3{
        color: #999;
        margin-bottom: 12px;
        padding-left: 9px;
    }
    .show-all{
        height: 35px;
        line-height: 35px;
        text-align: center;
        background-color: #f7f7f7;
        border-radius: 6px;
        cursor: pointer;
        border: 1px solid #f0f0f0;
    }
    .user{
        cursor: pointer;
        position: relative;
        box-sizing: border-box;
        padding: 9px;
        padding-left: 80px;
        img{
            position: absolute;
            top: 9px;
            left: 9px;
            border-radius: 50%;
            width: 50px;
        }
        h5{
            margin: 0;
            margin-bottom: 6px;
        }
        p{
            margin: 0;
            color: #999;
        }
        .follow{
            position: absolute;
            top: 6px;
            right: 9px;
            color: yellowgreen;
        }
    }
`

