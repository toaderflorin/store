import React, { Component, PropTypes } from 'react'
import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.logoutClick = this.logoutClick.bind(this)
  }

  loginClick(e) {
    browserHistory.push('/')
  }

  logoutClick(e) {
    Meteor.logout((error) => {
      if (!error) {
        browserHistory.push('/')
      }
    })
  }

  render() {
    return (
      <div className="header">
        <div className="container">
          <div style={{ float: "left" }}>
            <h1>The Store</h1>
            <Link to='/'>Home</Link> | <Link to='/admin'>Admin</Link>
          </div>

          <div style={{ float: "right", textAlign: "right", marginTop: "20px" }}>
            {Meteor.user() ?
              <div>Welcome <b><i>{Meteor.user().profile.name}</i></b>
              <br/>
               <Link to='/basket'>Basket</Link> | <a href="/" onClick={this.logoutClick}>Log out</a></div>
              : ''}
          </div>
        </div>
      </div>
    )
  }
}
