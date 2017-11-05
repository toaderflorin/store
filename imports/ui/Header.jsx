import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  constructor(props) {
    super(props)
    console.log(Link)
    this.logoutClick = this.logoutClick.bind(this)
  }

  loginClick(e) {
    browserHistory.push('/')
  }

  logoutClick(e) {
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
            <Link to='/'>Home</Link> | <Link to='/admin'>Admin</Link>
          </div>
          <p>
            {!Meteor.user() ? <a href="/login" onClick={this.loginClick}>Log in</a> : ''}
            {Meteor.user() ?
              <div>Welcome <b><i>{Meteor.userId()}</i></b>
              <br/>
              <a href="/" onClick={this.logoutClick}>log out</a></div>
              : ''}
          </p>
        </div>
      </div>
    )
  }
}
