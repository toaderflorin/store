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
      <div className="fullscreen black">
        <div className="login-box">
          <h1>The Store</h1>
          <div>
            <input placeholder="Username" onChange={this.usernameChanged}/>
          </div>
          <div>
            <input placeholder="Password" type="password" onChange={this.passwordChanged}/>
          </div>
          <p>
            <button onClick={this.login}>Log On</button>
          </p>
          <br/>
          <div>
            Don't have an <a href="/accounts">account</a>?
          </div>
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
        browserHistory.push('/products/men')
      }
    })
  }
}
