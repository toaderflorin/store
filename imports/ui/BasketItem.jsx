import React, { Component, PropTypes } from 'react'
import { Session } from 'meteor/session'

export default class BasketItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="basket-item">
        {this.props.product.product.text}({this.props.product.count})
        <button onClick={this.props.deleteClick}>Delete</button>
      </div>
    )
  }
}
