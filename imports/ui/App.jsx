import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Tasks } from '../api/tasks.js'
import Task from './Task.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.logoutClick = this.logoutClick.bind(this)
    this.toggleHideCompleted = this.toggleHideCompleted.bind(this)

    this.state = {
      hideCompleted: false

    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    Meteor.call('tasks.insert', text)
    ReactDOM.findDOMNode(this.refs.textInput).value = ''
  }

  renderTasks() {
    let filteredTasks = this.props.tasks

    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id
      return <Task key={task._id} task={task} />
    })
  }

  toggleHideCompleted() {
    this.setState({ hideCompleted: !this.state.hideCompleted });
  }

  logoutClick() {
    Meteor.call('users.logout', this.username, this.password, function (error) {
      if (!Meteor.isServer && !error) {
        window.location = '/'
      }
    })
  }

  render() {
    console.log(Meteor.userId())

    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>
          <div>
            <a href="/login">Log in</a> | <a href="/#" onClick={this.logoutClick}>Log out</a>
          </div>
          <br/>
          {this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit} >
              <input type="text" ref="textInput" placeholder="Type to add new tasks" />
            </form> : ''
          }
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('tasks')

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user()
  }
}, App)
