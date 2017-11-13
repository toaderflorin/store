import React, { Component, PropTypes } from 'react'
import { Session } from 'meteor/session'
import { browserHistory } from '../../client/main.jsx'
import BasketItem from './BasketItem'
import classnames from 'classnames'

export default class Basket extends Component {
  constructor() {
    super()
    this.deleteClick = this.deleteClick.bind(this)
  }

  componentWillMount() {
    const basket = Session.get('basket')
    if (!basket) {
      browserHistory.push('/login')
    }
  }

  deleteClick(product) {
    const arr = Session.get('basket')

    if(confirm('Are you sure?')) {
      arr.splice(arr.indexOf(product), 1)
      Session.set('basket', arr)
      browserHistory.push('/basket')
    }
  }

  render() {
    const basket = Session.get('basket')
    const obj = basket.map((i) => <BasketItem key={(Math.random() * 10000000).toString()}
      product={i} deleteClick={this.deleteClick.bind(this, i)}/>)

    let total = Math.sum(...basket.map((i) => i.price))

    return (
      <div className="container">
        {obj}
        <h3>Total</h3>
        <p>
          {total}
        </p>
      </div>
    )
  }
}
