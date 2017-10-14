import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Product extends Component {
  constructor() {
    super()
    this.deleteTask = this.deleteTask.bind(this)
  }

  render() {
    return (
      <li>
        <button className='product' onClick={this.deleteTask} >Delete</button>
        <span className="text">
          {this.props.product.text}
        </span>
      </li>
    )
  }

  deleteTask() {
    Meteor.call('products.remove', this.props.product._id)
  }
}
