import React, { Component, PropTypes } from 'react'
import { Router, Route } from 'react-router'
import Header from './Header'

const Layout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="DefaultLayout">
        <Header/>
        <Component {...matchProps} />
      </div>
    )} />
  )
}

export default Layout
