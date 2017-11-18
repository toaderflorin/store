import React, { Component, PropTypes } from 'react'
import BasketItem from './BasketItem'
import classnames from 'classnames'
import { Session } from 'meteor/session'
import { browserHistory } from '../../client/main.jsx'

export default class Basket extends Component {
  constructor() {
    super()
    this.deleteClick = this.deleteClick.bind(this)
    this.render = this.render.bind(this)
  }

  componentWillMount() {
    const basket = Session.get('basket')
    if (!basket) {
      browserHistory.push('/login')
    }
  }

  deleteClick(product) {
    if(confirm('Are you sure?')) {
      const arr = Session.get('basket')
      arr.splice(arr.indexOf(product), 1)
      Session.set('basket', arr)
      browserHistory.push('/basket')
    }
  }

  render() {
    const basket = Session.get('basket')
    let total = 0
    let object = undefined

    if (basket !== undefined && basket.length > 0) {
      obj = basket.map((i) => <BasketItem key={(Math.random() * 10000000).toString()}
        product={i} deleteClick={this.deleteClick.bind(this, i)}/>)

      for (let i of basket) {
        total += i.product.price * i.count
      }

      return (
        <div className="container">
          {obj}
          <h3>Total</h3>
          <p>${total}</p>
        </div>
      )
    } else {
      return (
        <div className="container">
          <br/>
          Basket is empty.
          <br/>
        </div>
      )
    }
  }
}
