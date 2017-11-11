import React, { Component, PropTypes } from 'react'
import { browserHistory } from '../../client/main.jsx'
import { Session } from 'meteor/session'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.usernameChanged = this.usernameChanged.bind(this)
    this.passwordChanged = this.passwordChanged.bind(this)
  }

  render() {
    return (
      <div className="container">
        <h1>Log In</h1>
        <div>
          <input placeholder="Username" onChange={this.usernameChanged}/>
        </div>
        <div>
          <input placeholder="Password" type="password" onChange={this.passwordChanged}/>
        </div>
        <input type="button" value="Log In" onClick={this.login}/>
        <br/><br/>
        <div>
          Don't have an <a href="/accounts">account</a>?
        </div>
      </div>
    )
  }

  usernameChanged(event) {
    this.username = event.target.value
  }

  passwordChanged(event) {
    this.password = event.target.value
  }

  login() {
    Meteor.loginWithPassword(this.username, this.password, function (error) {
      if (error) {
        alert('Could not log in.')
      } else {
        Session.set('basket', [])
        browserHistory.push('/')
      }
    })
  }
}
