import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Product from './Product'
import { Products } from '../api/products'
import Header from './Header.jsx'

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
        <Header/>
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
