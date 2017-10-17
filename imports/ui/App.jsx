import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="fullscreen black">
          This is the search page.
        </div>
        <div style={{ height: "400px" }}>
          This is something else.
        </div>
      </div>
    )
  }
}
