import React, { Component, PropTypes } from 'react'
import { Session } from 'meteor/session'

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.addClick = this.addClick.bind(this)
  }

  addClick() {
    const arr = Session.get('basket')
    arr.push(this.props.product)
    Session.set('basket', arr)
  }

  render() {
    return (
      <div className="basket-item">
        {this.props.product.text}
        <button style={{ float: "right" }} onClick={this.addClick}>Add to Basket</button>
      </div>
    )
  }
}
