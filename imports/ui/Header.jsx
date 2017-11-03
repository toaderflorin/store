import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.logoutClick = this.logoutClick.bind(this)
  }

  loginClick(e) {
    browserHistory.push('/')
  }

  logoutClick(e) {
    console.log('logging out')
    Meteor.logout(function(error) {
      if (!error) {
        browserHistory.push('/')
      }
    })
  }

  render() {
    return (
      <div className="header">
        <div className="container">
          <h1>The Store</h1>
          <div>
            {!Meteor.user() ? <a href="/login" onClick={this.loginClick}>Log in</a> : ''}
            {Meteor.user() ?
              <div>Welcome <b><i>{Meteor.userId()}</i></b>
              <br/>
              <a href="/" onClick={this.logoutClick}>log out</a></div>
              : ''}
          </div>
        </div>
      </div>
    )
  }
}
