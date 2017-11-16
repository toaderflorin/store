import { createContainer } from 'meteor/react-meteor-data'
import { Tracker } from 'meteor/tracker'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import AdminItem from './AdminItem.jsx'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import { Products } from '../api/products.js'
import { browserHistory } from '../../client/main.jsx'

export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { products: [] }
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
      return <AdminItem key={product._id} product={product} />
    })

    return (
      <div className="root">
        <div className="container">
          <h2>Administration</h2>
          {Meteor.userId() ?
            <div>
              <Link to='/new'>Add new</Link><br/><br/>
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
