import { createContainer } from 'meteor/react-meteor-data'
import { Tracker } from 'meteor/tracker'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import Product from './Product.jsx'
import { Products } from '../api/products.js'
import { browserHistory } from '../../client/main.jsx'

export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const handle = Meteor.subscribe('products')
    Tracker.autorun(() => {
      let products = Products.find({}, { sort: { createdAt: -1 } }).fetch()
      this.setState({
        products
      })
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    Meteor.call('products.insert', text)
  }

  render() {
    const filteredProducts = this.state.products
    const renderedProducts  = filteredProducts.map((product) => {
      return <Product key={product._id} product={product} />
    })

    return (
      <div className="root">
        <div className="container">
          {Meteor.userId() ?
            <div>
              <input className="add-product" type="text" ref="textInput" placeholder="Type to add new products" />
              <button className="add-button" onClick={this.handleSubmit}>Add</button>
              <br/>
            </div> : ''
          }
          <br/>
          <div className="product-list">
            {renderedProducts}
          </div>
        </div>
      </div>
    )
  }
}
