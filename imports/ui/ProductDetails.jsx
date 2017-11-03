import React, { Component, PropTypes } from 'react'
import Header from './Header.jsx'
import { Products } from '../api/products.js'

export default class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const handle = Meteor.subscribe('products')

    Tracker.autorun(() => {
      let products = Products.find({ _id: this.props.match.params.id }, { sort: { createdAt: -1 } }).fetch()
      let product = products[0]

      this.setState({
        product
      })
    })
  }

  render() {
    console.log(this.state.product)
    return (
      <div>
        <Header/>
        <div className="container">
          <h2>This is the product detail page.</h2>
          {this.state.product ?
            this.state.product.text : ''
          }
        </div>
      </div>
    )
  }
}
