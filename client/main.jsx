import React from 'react'
import { Meteor } from 'meteor/meteor'
// import { FlowRouter } from 'meteor/kadira:flow-router'
import { render } from 'react-dom'
import { mount } from 'react-mounter';
import Search from '../imports/ui/Search.jsx'
import Admin from '../imports/ui/Admin.jsx'
import Accounts from '../imports/ui/Accounts.jsx'
import Login from '../imports/ui/Login.jsx'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory()

renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Search}/>
      {/* <Route path="lists/:id" component={ListPageContainer}/>
      <Route path="signin" component={AuthPageSignIn}/>
      <Route path="join" component={AuthPageJoin}/>
      <Route path="*" component={NotFoundPage}/> */}
    </div>
  </Router>
)

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});

// FlowRouter.route('/', {
//   name: 'Root',
//   action() {
//     mount(App, { main: <App/> })
//   }
// })
//
// FlowRouter.route('/login', {
//   name: 'Login',
//   action() {
//     mount(Login, { main: <Login/> })
//   }
// })
//
// FlowRouter.route('/accounts', {
//   name: 'Accounts',
//   action() {
//     mount(Accounts, { main: <Accounts/> })
//   }
// })
//
// FlowRouter.route('/admin', {
//   name: 'Admin',
//   action() {
//     mount(Admin, { main: <Admin/> })
//   }
// })
