import React, { Component, PropTypes } from 'react'

const Layout = ({ component: Co
  mponent, ...rest }) => {
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
