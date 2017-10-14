import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Products } from '../api/products.js'
import Product from './Product.jsx'
import { FlowRouter } from 'meteor/kadira:flow-router'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.logoutClick = this.logoutClick.bind(this)
    this.state = {
      loggedIn: false
    }
  }

  handleSubmit(e) {
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    Meteor.call('products.insert', text)
  }

  loginClick(e) {
    FlowRouter.go('/login')
  }


  logoutClick(e) {
    // e.preventDefault()
    Meteor.logout(function(error) {
      if (error) {
        console.log('Logout failed.', error)
      } else {
        // this.setState(){
        //   loggedin: false
        // })

        // forcing a refresh
        window.location = '/'
      }

      // FlowRouter.go('/')
    })
  }

  render() {
    const filteredProducts = this.props.products
    const renderedProducts = filteredProducts.map((product) => {
      return <Product key={product._id} product={product} />
    })

    return (
      <div className="container">
        <h1>The Store</h1>
        <div>
          {!Meteor.user() && <a href="/login" onClick={this.loginClick}>Log in</a>}
          {Meteor.user() && <a href="/" onClick={this.logoutClick}>Log out</a>}
        </div>

        <br/>

        {Meteor.userId() ?
          <div>
            <form onSubmit={this.handleSubmit} >
              <input className="add-product"  type="text" ref="textInput" placeholder="Type to add new products" />
            </form>
            <br/>
          </div> : ''
        }

        {renderedProducts}
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('products')

  return {
    products: Products.find({}, {
      sort: { createdAt: -1 }
    }).fetch()
  }
}, App)
