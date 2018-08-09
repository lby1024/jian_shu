import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'
import './index.css'
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render( <App/> , document.getElementById('root'))
registerServiceWorker()
