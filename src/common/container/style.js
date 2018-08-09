import styled from 'styled-components'


export const Wrapper = styled.div`
    @media (max-width: 625px) {
        width: 100vw;
        justify-content: center;
        display: flex;
        .left{
            width: 98vw;
        }
        .right{
            display: none;
        }
    }
    @media (min-width: 625px) {
        width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .left{
            width: 625px;
        }
    }
    min-height: 100vh;
    padding-top: 30px;
    .left{
        /* background-color: #f3f3f3; */
        .hidden{
            visibility: hidden;
        }
        .read-more{
            height: 39px;
            line-height: 39px;
            background-color: #dcdcdc;
            color: #fff;
            font-size: 18px;
            margin-bottom: 66px;
            margin-top: 66px;
            border-radius: 9px;
            text-align: center;
            cursor: pointer;
            &:hover{
                background-color: #999;
            }
        }
    }
    .right{
        width: 280px;
        border-radius: 9px;
    }
`
