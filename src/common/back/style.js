import styled from 'styled-components'

import top from '../../static/images/ico-top1.png'

export const BackWrapper = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 66px;
    right: 45px;
    border: 1px solid #dcdcdc;
    background-image: url(${top});
    background-position: 80% center;
    background-size: 70%;
    background-repeat: no-repeat;
    cursor: pointer;
    &:hover{
        background-color: #f3f3f3;
    }
`

