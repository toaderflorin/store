import React, { Component, PropTypes } from 'react'
import { Users } from '../api/accounts.js'
import { Router, Route } from 'react-router'
import Login from './Login'
import Search from './Search'
import Admin from './Admin'
import Accounts from './Accounts'
import ProductDetails from './ProductDetails'
import Basket from './Basket'
import AddProduct from './AddProduct'
import Layout from './Layout'
import { browserHistory } from '../../client/main.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <div>
            <Route path="/login" component={Login}/>
            <Layout exact path="/" component={Search}/>
            <Layout path="/admin" component={Admin}/>
            <Layout path="/new" component={AddProduct}/>
            <Layout path="/basket" component={Basket}/>
            <Layout path="/accounts" component={Accounts}/>
            <Layout path="/details/:id" component={ProductDetails} />
          </div>
           {/* render={(props) => <ProductDetails {...props}/>} */}
        </Router>
      </div>
    )
  }
}
