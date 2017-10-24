import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Product from './Product'
import { Products } from '../api/products'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.render = this.render.bind(this)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const handle = Meteor.subscribe('products')
    Tracker.autorun(() => {
      let products = Products.find({}, { sort: { createdAt: -1 } }).fetch()
      this.setState({
        products
      })
    })
  }

  render() {
    const renderedProducts = this.state.products.map(function (product) {
      return <Product key={product._id} product={product} />
    })

    return (
      <div className="root">
        <div className="header">
          <div className="container">
            <h1>The Store</h1>
            <div>
              {!Meteor.userId() ? <a href="/login" onClick={this.loginClick}>Log in</a> : ''}
              {Meteor.userId() ? <div>Welcome <b><i>{Meteor.userId()}</i></b>,
                <a href="/" onClick={this.logoutClick}>log out</a></div> : ''}
              <br/>
            </div>
          </div>
        </div>
        <div className="container">
          <br/>
          <div className="product-list">
            {renderedProducts}
          </div>
        </div>
      </div>
    )
  }
}