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
      <div className="product">
        <div className="product-image-container">
          <div className="product-image" style={{backgroundImage: `url('${this.props.product.url}')`}}
            onClick={this.onDetailsClick}></div>
        </div>
        <div><b>{this.props.product.text}</b></div>
        <div>${this.props.product.price}.99</div>
        <button className="buy" onClick={this.onAddClick} >Buy</button>
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
    browserHistory.push('/basket')
  }

  onDetailsClick() {
    browserHistory.push('details/' + this.props.product._id)
  }
}
