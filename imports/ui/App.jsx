import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Products } from '../api/products.js'
import Product from './Product.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.logoutClick = this.logoutClick.bind(this)
    this.state = {
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    Meteor.call('tasks.insert', text)
    ReactDOM.findDOMNode(this.refs.textInput).value = ''
  }

  renderProducts() {
    let filteredProducts = this.props.products
    return filteredProducts.map((product) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id
      return <Product key={product._id} product={product} />
    })
  }

  logoutClick() {
    Meteor.call('users.logout', this.username, this.password, function (error) {
      if (!Meteor.isServer && !error) {
        window.location = '/'
      }
    })
  }

  render() {
    console.log('USER', Meteor.user())

    const loginVisible = Meteor.user() ? 'visible' : 'hidden'
    const logoutVisible = !Meteor.user() ? 'visible' : 'hidden'

    return (
      <div className="container">
        <header>
          <h1>The Store</h1>
          <div>
            <a href="/login" style={{ visible: loginVisible }}>Log in</a>
            <a href="/#" style={{ visible: logoutVisible }} onClick={this.logoutClick}>Log out</a>
          </div>
          <br/>

          METEOR: {Meteor.user()}

          {this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit} >
              <input type="text" ref="textInput" placeholder="Type to add new tasks" />
            </form> : ''
          }
        </header>

        <ul>
          {this.renderProducts()}
        </ul>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('products')

  return {
    products: Products.find({}, {
      sort: {
        createdAt: -1
      }
    }).fetch(),
    currentUser: Meteor.user()
  }
}, App)
