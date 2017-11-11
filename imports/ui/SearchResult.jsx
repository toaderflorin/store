import React, { Component, PropTypes } from 'react'
import { Session } from 'meteor/session'

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.addClick = this.addClick.bind(this)
  }

  addClick() {
    const arr = Session.get('basket')
    console.log(arr)
    arr.push(this.props.product)
    Session.set('basket', arr)
  }

  render() {
    return (
      <div style={{ padding: '7px', backgroundColor: '#f3f3f3', marginBottom: '4px'}}>
        <div>{this.props.product.text}</div>
        <button onClick={this.addClick}>Add to Basket</button>
      </div>
    )
  }
}
