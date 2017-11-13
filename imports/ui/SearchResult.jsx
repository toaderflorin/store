import React, { Component, PropTypes } from 'react'
import { Session } from 'meteor/session'
import { browserHistory } from '../../client/main.jsx'

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
    browserHistory.push('/')
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
