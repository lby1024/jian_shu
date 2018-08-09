import React from 'react'
import {TitleWrapper} from './style.js'

class Title extends React.Component {

    render () {

        return (
            <TitleWrapper>
                <img 
                    src={this.props.src} 
                    alt="pci" 
                    draggable="false" 
                />
            </TitleWrapper>
        )
    }
}

export default Title