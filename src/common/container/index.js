import React from 'react'
import {Wrapper} from './style'
import Loading from '../../pages/home/loading'

// 需要参数
// ---> this.props.left ------ jsx ------> 左边的组件
// ---> this.props.right ------ jsx ------> 右边的组件
// ---> this.props.loading --- 布尔值 ---> 是否在加载数据
// ---> this.props.more ---> fn ---> 加载更多
class Container extends React.Component {
    render () {
        let {loading, more} = this.props
        return (
            <Wrapper>
                <div className="left">
                    {this.props.left}
                    <Loading load={loading} />
                    <div 
                        onClick={more}
                        className={loading?'read-more hidden':'read-more'}>
                        阅读更多
                    </div>
                </div>
                <div className='right'>
                    {this.props.right}
                </div>
            </Wrapper>
        )
    }
}

export default Container