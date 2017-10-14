import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import App from '../imports/ui/App.jsx'
import Accounts from '../imports/ui/Accounts.jsx'
import Login from '../imports/ui/Login.jsx'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter';

FlowRouter.route('/', {
  name: 'Root',
  action() {
    mount(App, { main: <App/> })
  }
})

FlowRouter.route('/login', {
  name: 'Login',
  action() {
    mount(Login, { main: <Login/> })
  }
})

FlowRouter.route('/accounts', {
  name: 'Accounts',
  action() {
    mount(Accounts, { main: <Accounts/> })
  }
})
