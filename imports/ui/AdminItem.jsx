import React, { Component, PropTypes } from 'react'
import { Session } from 'meteor/session'
import { browserHistory } from '../../client/main.jsx'

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  deleteProduct() {
    if (confirm('Are you sure?')) {
      Meteor.call('products.remove', this.props.product._id)
    }
  }

  render() {
    return (
      <div className="basket-item">
        {this.props.product.text}
        <button className="buy" onClick={this.deleteProduct}>Delete</button>
      </div>
    )
  }
}
