import React, { Component, PropTypes } from 'react'
import { Users } from '../api/accounts.js'
import { Router, Route } from 'react-router'
import Login from './Login'
import Search from './Search'
import Admin from './Admin'
import Accounts from './Accounts'
import ProductDetails from './ProductDetails'
import Header from './Header'
import Basket from './Basket'
import AddProduct from './AddProduct'
import { browserHistory } from '../../client/main.jsx'



export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <Router history={browserHistory}>
        <div>
          <Route path="/login" component={Login}/>
          <DefaultLayout exact path="/" component={Search}/>
          <DefaultLayout path="/admin" component={Admin}/>
          <DefaultLayout path="/new" component={AddProduct}/>
          <DefaultLayout path="/basket" component={Basket}/>
          <DefaultLayout path="/accounts" component={Accounts}/>
          <DefaultLayout path="/accounts" render={(props) => <ProductDetails {...props} />} />
        </div>
      </Router>
    </div>
  }
}
