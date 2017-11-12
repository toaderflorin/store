import React, { Component, PropTypes } from 'react'
import { Session } from 'meteor/session'

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
    console.log(props.product)
    this.addClick = this.addClick.bind(this)
  }

  addClick() {
    const arr = Session.get('basket')
    arr.push(this.props.product)
    Session.set('basket', arr)
    alert('Added product to basket.')
  }

  render() {
    return (
      <div className="basket-item">
        {this.props.product.text}
        <button onClick={this.addClick}>Add to Basket</button>
      </div>
    )
  }
}
