import React, { Component, PropTypes } from 'react'
import { Session } from 'meteor/session'

export default class BasketItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="basket-item">
        <div className="basket-item-image"
          style={{ backgroundImage: `url('${this.props.product.product.url}')` }}></div>
        {this.props.product.product.text}({this.props.product.count})
        <button className="buy" onClick={this.props.deleteClick}>Delete</button>
      </div>
    )
  }
}
