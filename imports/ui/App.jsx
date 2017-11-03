import React, { Component, PropTypes } from 'react'
import { Users } from '../api/accounts.js'
import { Router, Route } from 'react-router'
import Search from './Search'
import Admin from './Admin'
import Accounts from './Accounts'
import ProductDetails from './ProductDetails'
import Login from './Login.jsx'

import { browserHistory } from '../../client/main.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <Router history={browserHistory}>
        <div>
          <Route exact path="/" component={Search}/>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/details/:id" render={(props) => (
            <ProductDetails {...props} pass_to_page_content='hi' />
          )}/>

          <Route path="/accounts" component={Accounts}/>
        </div>
      </Router>
    </div>
  }
}
