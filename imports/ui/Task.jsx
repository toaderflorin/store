import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Task extends Component {
  constructor() {
    super()
    this.deleteTask = this.deleteTask.bind(this)
  }

  togglePrivate() {
    Meteor.call('tasks.setPrivate', this.props.task._id, !this.props.task.private)
  }

  render() {
    const taskClassName = classnames({
      checked: this.props.task.checked,
      private: this.props.task.private,
    })

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteTask} >Delete</button>
        <span className="text">
          {this.props.task.text}
        </span>
      </li>
    )
  }

  deleteTask() {
    Meteor.call('tasks.remove', this.props.task._id)
  }
}
