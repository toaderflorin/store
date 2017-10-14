import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Product extends Component {
  constructor() {
    super()
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  render() {
    return (
      <div className="product">
        <button className="delete" onClick={this.deleteProduct} >Delete</button>
        <span className="text">
          {this.props.product.text}
        </span>
      </div>
    )
  }

  deleteProduct() {
    if (confirm('Are you sure?')) {
      Meteor.call('products.remove', this.props.product._id)
    }
  }
}
