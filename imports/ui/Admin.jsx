import { FlowRouter } from 'meteor/kadira:flow-router'
import { createContainer } from 'meteor/react-meteor-data'
import { Tracker } from 'meteor/tracker'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import Product from './Product.jsx'
import { Products } from '../api/products.js'

export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.logoutClick = this.logoutClick.bind(this)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const handle = Meteor.subscribe('products')

    Tracker.autorun(() => {
      let prods = Products.find({}, { sort: { createdAt: -1 } }).fetch()
      this.setState({
        products: prods
      })
    })
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
        FlowRouter.go('/')
      }
    })
  }

  render() {
    const filteredProducts = this.state.products
    const renderedProducts  = filteredProducts.map((product) => {
      return <Product key={product._id} product={product} />
    })

    return (
      <div className="root">
        <div className="header">
          <div className="container">
            <h1>The Store</h1>
            <div>
              {!Meteor.userId() ? <a href="/login" onClick={this.loginClick}>Log in</a> : ''}
              {Meteor.userId() ? <div>Welcome <b><i>{Meteor.userId()}</i></b>,
                <a href="/" onClick={this.logoutClick}>log out</a></div> : ''}

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
