import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'

import Header from './common/header'
import Home from './pages/home'
import Footer from './common/footer'
import Back from './common/back'
import Detail from './pages/detail'
import Hot from './pages/hot'


class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/hot/:id" component={Hot}></Route>
                        <Route path="/detail/:id" component={Detail}></Route>
                        <Footer/>
                        <Back/>
                    </div>
                </HashRouter>
            </Provider>
        )
    }
}

export default App