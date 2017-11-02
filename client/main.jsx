import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { mount } from 'react-mounter'
import { Router, Route } from 'react-router'
import { Component, PropTypes } from 'react'
import App from '../imports/ui/App.jsx'
import { createBrowserHistory } from 'history'

export const browserHistory = createBrowserHistory()

renderRoutes = () => (
  <Route path="/" render={matchProps => <App {...matchProps} />} />
)

Meteor.startup(() => {
  render(<App/>, document.getElementById('app'));
});
