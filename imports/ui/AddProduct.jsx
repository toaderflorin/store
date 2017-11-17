import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Products } from '../api/products.js'
import { browserHistory } from '../../client/main.jsx'

export default class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.onAddClick = this.onAddClick.bind(this)
  }

  onAddClick() {
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    const url = ReactDOM.findDOMNode(this.refs.urlInput).value.trim()
    const description = ReactDOM.findDOMNode(this.refs.descriptionInput).value.trim()
    const price = parseFloat(ReactDOM.findDOMNode(this.refs.gender).value.trim())
    const gender = ReactDOM.findDOMNode(this.refs.gender).value

    alert(gender)

    Meteor.call('products.insert', {
      text: text,
      url: url,
      price: price,
      description: description,
      gender: gender
    })

    browserHistory.push('/admin')
  }

  render() {
    return (
      <div className="container">
        {Meteor.userId() ?
          <div>
            <b>Name</b>
            <p>
              <input className="add-product" type="text" ref="textInput" placeholder="Enter the product's name"/>
            </p>
            <p>
              <b>Price</b>
            </p>
            <p>
              <input className="add-product" type="text" ref="priceInput" placeholder="The product price"/>
            </p>
            <b>Description</b>
            <p>
              <textarea style={{ height: "150px", fontFamily: "Arial", padding: "7px" }}
                className="add-product" type="text" ref="descriptionInput" placeholder="A short description for the product"/>
            </p>
            <b>Category</b>
            <p>
              <select ref="gender">
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="K">Kids</option>
              </select>
            </p>
            <b>URL</b>
            <p>
              <input className="add-product" type="text" ref="urlInput" placeholder="Image URL"/>
            </p>
            <button className="add-button" onClick={this.onAddClick}>Add</button>
            <br/>
          </div> : ''
        }
      </div>
    )
  }
}
