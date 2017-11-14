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

  render() {
    return (
      <div className="basket-item">
        {this.props.product.text}
        <button onClick={this.addClick}>Add to Basket</button>
      </div>
    )
  }

  // render() {
  //   const basket = Session.get('basket')
  //   let total = 0
  //   let object = undefined
  //
  //   if (basket !== undefined && basket.length > 0) {
  //     obj = basket.map((i) => <BasketItem key={(Math.random() * 10000000).toString()}
  //       product={i} deleteClick={this.deleteClick.bind(this, i)}/>)
  //
  //     for (let i of basket) {
  //       total += i.product.price * i.count
  //     }
  //
  //     return (
  //       <div className="container">
  //         {obj}
  //         <h3>Total</h3>
  //         <p>
  //           {total}
  //         </p>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div className="container">
  //         Basket is empty.
  //       </div>
  //     )
  //   }
  // }
}
