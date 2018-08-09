import React from 'react'
import {UserWrapper} from './style.js'

// 推荐作者
class Users extends React.Component {
    render () {
        let {list} = this.props
        if (!list.length) return <div/>
        let dom_user = list.map((item, index) => 
            <div className='user' key={index}>
                <img src={item.pic} alt="pic"  />
                <h5>{item.name}</h5>
                <p>{item.discription}</p>
                <span className="follow">+关注</span>
            </div>
        )
        return (
            <UserWrapper>
                <h3>推荐作者</h3>
                {dom_user}
                <div className="show-all">查看全部></div>
            </UserWrapper>
        )
    }
}

export default Users