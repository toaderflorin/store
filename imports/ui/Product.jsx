import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { browserHistory } from '../../client/main.jsx'

export default class Product extends Component {
  constructor() {
    super()
    this.deleteProduct = this.deleteProduct.bind(this)
    this.onDetailsClick = this.onDetailsClick.bind(this)
  }

  render() {
    return (
      <div className="product">
        <button className="delete" onClick={this.deleteProduct} >Delete</button>
        <button className="delete" onClick={this.onDetailsClick}>Details</button>
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

  onDetailsClick() {
    browserHistory.push('details/' + this.props.product._id)
  }
}
