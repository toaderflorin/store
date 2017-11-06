
import React, { Component, PropTypes } from 'react'
import { Products } from '../api/products.js'

export default class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.onAddClick = this.onAddClick.bind(this)
  }

  onAddClick() {
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    Meteor.call('products.insert', text)
  }

  render() {
    return (
      <div className="container">
        {Meteor.userId() ?
          <div>
            <input className="add-product" type="text" ref="textInput" placeholder="Type to add new products" />
            <button className="add-button" onClick={this.onAddClick}>Add</button>
            <br/>
          </div> : ''
        }
      </div>
    )
  }
}
