import React, { Component, PropTypes } from 'react'
import { Users } from '../api/accounts.js'
import { Router, Route } from 'react-router'

export default class Accounts extends Component {
  constructor(props) {
    super(props)

    this.create = this.create.bind(this)
    this.usernameChanged = this.usernameChanged.bind(this)
    this.passwordChanged = this.passwordChanged.bind(this)
    this.fullnameChanged = this.fullnameChanged.bind(this)

    this.state = { errorMessage: '' }
  }

  render() {
    return <div className="container">
      <div style={{ padding: '15px' }}>
        <h1>Create user account</h1>

        <b>
          Full Name
        </b>
        <p>
          <input className="wide" type="text" name="text" placeholder="Full name" onChange={this.fullnameChanged} />
        </p>

        <b>
          User Name
        </b>
        <p>
          <input className="wide" type="text" name="text" placeholder="User name" onChange={this.usernameChanged} />
        </p>

        <b>
          Password
        </b>
        <p>
          <input className="wide" type="password" name="text" placeholder="Password" onChange={this.passwordChanged} />
        </p>
        <div>
          <button type="button" onClick={this.create}>Create</button>
        </div>
        <br/>
        {this.state.errorMessage}
      </div>
    </div>
  }

  usernameChanged(event) {
    this.username = event.target.value
  }

  fullnameChanged(event) {
    this.fullname = event.target.value
  }

  passwordChanged(event) {
    this.password = event.target.value
  }

  create() {
    Meteor.call('users.insert', this.username, this.password, this.fullname, function (error) {
      if (!Meteor.isServer && !error) {
        window.location = '/'
      }

      if (error) {
        this.errorMessage = 'Cannot add account, it might already exist.'
      }
    })
  }
}
