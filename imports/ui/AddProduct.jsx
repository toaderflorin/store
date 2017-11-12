import React, { Component, PropTypes } from 'react'
import { Products } from '../api/products.js'
import ReactDOM from 'react-dom'
import { browserHistory } from '../../client/main.jsx'

export default class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.onAddClick = this.onAddClick.bind(this)
  }

  onAddClick() {
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    Meteor.call('products.insert', text)
    browserHistory.push('/admin')
  }

  render() {
    return (
      <div className="container">
        {Meteor.userId() ?
          <div>
            <input className="add-product" type="text" ref="textInput" placeholder="Product name" />
            <input className="add-product" type="text" ref="price" placeholder="Product price" />
            <button className="add-button" onClick={this.onAddClick}>Add</button>
            <br/>
          </div> : ''
        }
      </div>
    )
  }
}
