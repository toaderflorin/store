import React, { Component, PropTypes } from 'react'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.usernameChanged = this.usernameChanged.bind(this)
    this.passwordChanged = this.passwordChanged.bind(this)
  }

  render() {
    return <div className="container">
      <br/>
      <h1>Log In</h1>
      <br/>
      <div>Username</div>
      <div>
        <input onChange={this.usernameChanged}/>
      </div>
      <div>Password</div>
      <div>
        <input type="password" onChange={this.passwordChanged}/>
      </div>
      <input type="button" value="Log In" onClick={this.login}/>
      <br/><br/>
      <div>
        Don't have an account? <a href="/accounts">Create</a> one.
      </div>
    </div>
  }

  usernameChanged(event) {
    this.username = event.target.value
  }

  passwordChanged(event) {
    this.password = event.target.value
  }

  login() {
    console.log('Trying to log in with', this.username, 'and', this.password)
    Meteor.loginWithPassword(this.username, this.password, function (error) {
      console.log('Logged in successfully.')
    })
  }
}
