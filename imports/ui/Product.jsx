import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { browserHistory } from '../../client/main.jsx'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.onDetailsClick = this.onDetailsClick.bind(this)
    this.onAddClick = this.onAddClick.bind(this)
  }

  render() {
    return (
      <div className="product" style={{
        backgroundImage: `url('${this.props.product.url}')`
      }}>
        <button className="delete" onClick={this.onAddClick} >Add</button>
        <button className="delete" onClick={this.onDetailsClick}>Details</button>
        <span className="text">
          {this.props.product.text}
        </span>
      </div>
    )
  }

  onAddClick() {
    const arr = Session.get('basket')
    const item = (arr.filter((i) => i.product._id === this.props.product._id))[0]

    if (item === undefined) {
      arr.push({
        product: this.props.product,
        count: 1
      })
    } else {
      item.count++
    }

    Session.set('basket', arr)
    browserHistory.push('/')
  }

  onDetailsClick() {
    browserHistory.push('details/' + this.props.product._id)
  }
}
