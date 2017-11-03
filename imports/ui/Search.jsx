import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Product from './Product'
import { Products } from '../api/products'
import Header from './Header.jsx'
import SearchResult from './SearchResult.jsx'

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
      return <SearchResult key={product._id} product={product} />
    })

    return (
      <div className="root">
        <Header/>
        <div className="container">
          <input className="add-product" type="text" ref="textInput" placeholder="Search" />
          <button className="add-button">Search</button>
          <br/><br/>
          <div>
            {renderedProducts}
          </div>
        </div>
      </div>
    )
  }
}
