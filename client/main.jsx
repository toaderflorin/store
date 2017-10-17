import React from 'react'
import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { render } from 'react-dom'
import { mount } from 'react-mounter';
import App from '../imports/ui/App.jsx'
import Admin from '../imports/ui/Admin.jsx'
import Accounts from '../imports/ui/Accounts.jsx'
import Login from '../imports/ui/Login.jsx'

const Products = new Mongo.Collection('products')

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

FlowRouter.route('/admin', {
  name: 'Admin',
  action() {
    mount(Admin, { main: <Admin/> })
  }
})
