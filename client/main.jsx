import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import App from '../imports/ui/App.jsx'
import Accounts from '../imports/ui/Accounts.jsx'
import Login from '../imports/ui/Login.jsx'
import { Router, Route } from 'react-router'
// import createBrowserHistory from 'history/createBrowserHistory'

import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// const browserHistory = createBrowserHistory()

// export const renderRoutes = () => (
//   <Router history={browserHistory}>
//     <div>
//       <Route path="/accounts" component={Accounts} />
//       <Route path="/login" component={Login} />
//       <Route exact path="/" component={App} />
//     </div>
//   </Router>
// )

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

// Meteor.startup(() => {
//   render(renderRoutes(), document.getElementById('render-target'))
// })
