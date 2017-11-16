import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Product from './Product'
import { Products } from '../api/products'
import AdminItem from './AdminItem.jsx'
import { browserHistory } from '../../client/main.jsx'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentWillMount() {
    const basket = Session.get('basket')
    if (!basket) {
      browserHistory.push('/login')
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
    const renderedProducts = this.state.products.map(
      (product) => <Product key={product._id} product={product} />)

    return (
      <div className="container">
        <input className="search-input" type="text" ref="textInput" placeholder="Search"/>
        <button className="add-button">Search</button>
        <br/><br/>
        <div className="product-list">
          {renderedProducts}
        </div>
      </div>
    )
  }
}
