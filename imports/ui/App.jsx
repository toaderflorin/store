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
  }

  handleSubmit(e) {
    e.preventDefault()
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    Meteor.call('products.insert', text)
  }

  loginClick(e) {
    FlowRouter.go('/login')
  }

  logoutClick(e) {
    Meteor.logout(function(error) {
      if (!error) {
        window.location = '/'
      }
    })
  }

  render() {
    const filteredProducts = this.props.products
    const renderedProducts = filteredProducts.map((product) => {
      return <Product key={product._id} product={product} />
    })

    return (
      <div className="root">
        <div className="header">
          <div className="container">
            <h1>The Store</h1>
            <div>
              {!Meteor.user() && <a href="/login" onClick={this.loginClick}>Log in</a>}
              {Meteor.user() && <div>Welcome <b><i>{Meteor.user().emails[0].address}</i></b>, <a href="/" onClick={this.logoutClick}>log out</a></div>}

              <br/>

              {Meteor.userId() ?
                <div>
                  <input className="add-product" type="text" ref="textInput" placeholder="Type to add new products" />
                  <button className="add-button" onClick={this.handleSubmit}>Add</button>
                  <br/>
                </div> : ''
              }
            </div>
          </div>
        </div>
        <div className="container">
          <br/>
          <div className="product-list">
            {renderedProducts}
          </div>
        </div>
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
