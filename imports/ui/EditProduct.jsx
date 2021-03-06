import React, { Component, PropTypes } from 'react'
import { Products } from '../api/products.js'
import ReactDOM from 'react-dom'
import { browserHistory } from '../../client/main.jsx'

export default class EditProduct extends Component {
  constructor(props) {
    super(props)
    this.onAddClick = this.onAddClick.bind(this)
  }

  componentDidMount() {
    const handle = Meteor.subscribe('products')

    Tracker.autorun(() => {
      let products = Products.find({
        _id: this.props.match.params.id
      }, {
        sort: {
          createdAt: -1
        }
      }).fetch()

      let product = products[0]

      this.setState({
        product
      })
    })
  }

  onAddClick() {
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    const url = ReactDOM.findDOMNode(this.refs.urlInput).value.trim()
    const description = ReactDOM.findDOMNode(this.refs.descriptionInput).value.trim()
    const price = parseFloat(ReactDOM.findDOMNode(this.refs.priceInput).value.trim())

    Meteor.call('products.insert', {
      text: text,
      url: url,
      price: price,
      description: description
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
              <input className="add-product" type="text" ref="textInput" placeholder="Product name"/>
            </p>
            <p>
              <b>Price</b>
            </p>
            <p>
              <input className="add-product" type="text" ref="priceInput" placeholder="Product price"/>
            </p>
            <b>Description</b>
            <p>
              <textarea style={{ height: "200px", fontFamily: "Arial", padding: "7px" }} className="add-product" type="text" ref="descriptionInput" placeholder=""/>
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
