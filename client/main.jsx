import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { mount } from 'react-mounter';
import Search from '../imports/ui/Search.jsx'
import Admin from '../imports/ui/Admin.jsx'
import Accounts from '../imports/ui/Accounts.jsx'
import Login from '../imports/ui/Login.jsx'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Component, PropTypes } from 'react'

const browserHistory = createBrowserHistory()

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>      
      <Router history={browserHistory}>
        <div>
          <Route exact path="/" component={Search}/>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
        </div>
      </Router>
    </div>
  }
}

renderRoutes = () => (
  <Route path="/" render={matchProps => <App {...matchProps} />} />
)

Meteor.startup(() => {
  render(<App/>, document.getElementById('app'));
});
