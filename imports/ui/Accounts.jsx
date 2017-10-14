import React, { Component, PropTypes } from 'react'
import { Users } from '../api/accounts.js'
import { Router, Route } from 'react-router'

export default class Accounts extends Component {
  constructor(props) {
    super(props)
    this.create = this.create.bind(this)
    this.usernameChanged = this.usernameChanged.bind(this)
    this.passwordChanged = this.passwordChanged.bind(this)
    this.state = { errorMessage: '' }
  }

  render() {
    return <div className="container">
      <div style={{ padding: '15px' }}>
        <h2>Create user account</h2>
        <div>
          <input className="wide" type="text" name="text" placeholder="Username" onChange={this.usernameChanged} />
        </div>
        <div>
          <input className="wide" type="password" name="text" placeholder="Password" onChange={this.passwordChanged} />
        </div>
        <div>
          <input value="Create" type="button" onClick={this.create} />
        </div>
        <br/>
        {this.state.errorMessage}
      </div>
    </div>
  }

  usernameChanged(event) {
    this.username = event.target.value
  }

  passwordChanged(event) {
    this.password = event.target.value
  }

  create() {
    Meteor.call('users.insert', this.username, this.password, function (error) {
      if (!Meteor.isServer && !error) {
        window.location = '/'
      }

      if (error) {
        this.errorMessage = 'Cannot add account, it might already exist.'
      }
    })
  }
}
