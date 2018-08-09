import styled from 'styled-components'

import logo from '../../static/images/logo.png'
import icon_write from '../../static/images/icon_write.png'
import search_gray from '../../static/images/search_gray.png'
import search_fff from '../../static/images/search_fff.png'
import loading from '../../static/images/旋转.png'
import list from '../../static/images/list.png'

export const Wrapper = styled.div`
    height: 56px;
    font-size: 16px;
    border-bottom: 1px solid #f3f3f3;
    position: relative;
    .container{
        max-width: 1400px;
        height: 56px;
        margin: 0 auto;
        position: relative;
    }
`
export const Logo = styled.a`
    width: 100px;
    height: 56px;
    background-image: url(${logo});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
`
export const Nav = styled.div`
    @media (max-width: 1100px) {
        display: none;
    }
    height: 56px;
    max-width: 960px;
    /* background-color: #f3f3f3; */
    margin: 0 auto;
    display: flex;
    align-items: center;
    .btn{
        cursor: pointer;
        margin-right: 12px;
        color: #333;
        display: inline-block;
        box-sizing: border-box;
        padding: 0 16px;
        height: 39px;
        background-color: #fff;
        &:first-child{
            color: #f2735d;
        }
    }
    `
export const Input = styled.div`
    width: 150px;
    height: 36px;
    background-color: #f3f3f3;
    position: relative;
    transition: all 1s ease;
    border-radius: 18px;
    &.focus{
        width: 210px;
        .icon-search{
            background-color: #ccc;
            background-image: url(${search_fff})
        }
    }
    .search{
        border-radius: 18px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f3f3f3;
        box-sizing: border-box;
        padding-left: 18px;
    }
    .icon-search{
        transition: all 1s ease;
        position: absolute;
        border-radius: 50%;
        top: 0;
        right: 0;
        box-sizing: border-box;
        border: 3px #f3f3f3 solid;
        width: 36px;
        height: 36px;
        background-image: url(${search_gray});
        background-size: auto 50%;
        background-position: center;
        background-repeat: no-repeat;
    }
`
export const Btns = styled.div`
    @media (max-width: 500px) {
        display: none;
    }
    width: 350px;
    height: 56px;
    position: absolute;
    right: 0;
    top: 0;
    /* background-color: red; */
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .btn{
        color: #333;
        display: inline-block;
        box-sizing: border-box;
        padding: 0 16px;
        height: 39px;
        background-color: #fff;
    }
    .write{
        border-radius: 18px;
        background-color: #f2735d;
        color: #fff;
        font-weight: bold;
        padding-left: 38px;
        background-image: url(${icon_write});
        background-size: auto 50%;
        background-position: 12% center;
        background-repeat: no-repeat;
    }
    .regist{
        border-radius: 18px;
        border:1px solid #f2735d;
        color: #f2735d;
        font-weight: bold;
        &:hover{
            background-color: #ffeded;
        }
    }
`
export const Hot = styled.div`
    width: 250px;
    min-height: 200px;
    background-color: #fff;
    position: absolute;
    border-radius: 6px;
    box-shadow: 0px 0px 9px #999;
    left: 0px;
    top: 50px;
    box-sizing: border-box;
    padding: 21px;
    z-index: 99;
    &:before{
        content: '';
        display: block;
        border-bottom: 9px solid #fff;  
        border-right: 9px solid transparent;
        border-left: 9px solid transparent;
        position: absolute;
        left: 15px;
        top: -9px;
        font-size: 12px;
    }
    .title{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        .change{
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
            &:hover{
                color: orange;
            }
            .icon-loading{
                display: inline-block;
                width: 16px;
                height: 16px;
                margin-right: 3px;
                background-image: url(${loading});
                background-size: 80%;
                background-position: center;
                background-repeat: no-repeat;
                transform: rotate(0deg);
                transition: all .3s ease;
            }
        }
    }
    .tag{
        font-size: 12px;
        border-radius: 6px;
        border: 1px #ccc solid;
        display: inline-block;
        margin-top: 12px;
        margin-right: 3px;
        box-sizing: border-box;
        padding: 5px;
    }
`

export const SlideWarpper = styled.div`
    @media (max-width: 1100px) {
        display: block;
    }
    @media (min-width: 1100px) {
        display: none;
    }
    &.show{
        .btns{
            height: 165px;
        }
        border-bottom: 1px solid #dcdcdc;
    }
    width: 100vw;
    position: absolute;
    left: 0;
    top: 57px;
    text-align: center;
    background-color: #fff;
    z-index: 1;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
    button{
        display: inline-block;
        height: 39px;
        width: 39px;
        border-radius: 9px;
        position: absolute;
        left: 98px;
        top: -50px;
        background-image: url(${list});
        background-size: 70%;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #fff;
        border: 1px solid #dcdcdc;
        cursor: pointer;
    }
    .btns{
        height: 0;
        overflow: hidden;
        transition: height .8s ease;
        .btn{
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #dcdcdc;
            width: auto;
            input{
                box-sizing: border-box;
                padding-left: 21px;
                background-color: #f3f3f3;
                height: 39px;
                width: 90vw;
                border-radius: 18px;
                background-image: url(${search_gray});
                background-size: auto 39%;
                background-position: 95% center;
                background-repeat: no-repeat;
            }
            &:nth-child(1){
                color: red;
            }
            &:nth-child(3){
                border: 0;
            }
        }
    }
`