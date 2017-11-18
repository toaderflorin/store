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
          <div className="main">
            <Route exact path="/" component={Login}/>
            <Layout path="/products/men" component={Search} categ="m"/>
            <Layout path="/products/women" component={Search} categ="f"/>
            <Layout path="/products/kids" component={Search} categ="k"/>
            <Layout path="/admin" component={Admin}/>
            <Layout path="/new" component={AddProduct}/>
            <Layout path="/basket" component={Basket}/>
            <Layout path="/accounts" component={Accounts}/>
            <Layout path="/details/:id" component={ProductDetails}/>
            <br/><br/>
          </div>
        </Router>
        <div className="container footer" style={{ textAlign: "center" }}>
          <p>
            Copyright (c) ACME Company
          </p>
          <p>
            FACEBOOK INSTAGRAM TWITTER
          </p>
        </div>
        <br/>
      </div>
    )
  }
}
