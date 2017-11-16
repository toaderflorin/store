import React, { Component, PropTypes } from 'react'
import { Router, Route } from 'react-router'
import { NavLink } from 'react-router-dom'

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
    const items = 0
    if (Session.get('basket')) {
     items = Session.get('basket').length
   }

    return (
      <div className="header">
        <div className="container">
          <div style={{ float: "left" }}>
            <h1>The Store</h1>
            <NavLink className="link" exact to='/' activeClassName="link-active">Home</NavLink>
            <NavLink className="link" activeClassName="link-active" to='/admin'>Admin</NavLink>
          </div>

          <div style={{ float: "right", textAlign: "right", marginTop: "20px" }}>
              {Meteor.user() ?
              <div>Welcome <b><i>{Meteor.user().profile.name}</i></b>
              <div style={{ marginTop: "14px" }}>                            
                <a href="/" onClick={this.logoutClick}>Log out</a></div>
                &nbsp;
                <NavLink className="link" activeClassName="linkActive" to="/basket">Basket({items})</NavLink>
              </div>
            : ''}
          </div>
        </div>
      </div>
    )
  }
}
