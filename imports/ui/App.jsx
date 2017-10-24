import React, { Component, PropTypes } from 'react'
import { Users } from '../api/accounts.js'
import { Router, Route } from 'react-router'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="container">
      <div>
        Page Header
      </div>
      <div className="content">
        {content that changes}
      </div>      
    </div>
  }
}
