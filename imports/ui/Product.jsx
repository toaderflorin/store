import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Product extends Component {
  constructor() {
    super()
    this.deleteTask = this.deleteTask.bind(this)
  }

  render() {
    return (
      <li className={taskClassName}>
        <button onClick={this.deleteTask} >Delete</button>
        <span className="text">
          {this.props.product.text}
        </span>
      </li>
    )
  }

  deleteTask() {
    Meteor.call('tasks.remove', this.props.product._id)
  }
}
