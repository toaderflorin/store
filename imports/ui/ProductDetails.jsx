import React, { Component, PropTypes } from 'react'
import Header from './Header.jsx'
import Product from './Product.jsx'
import { Products } from '../api/products.js'
import { browserHistory } from '../../client/main.jsx'

export default class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onAddClick = this.onAddClick.bind(this)
  }

  componentDidMount() {
    const handle = Meteor.subscribe('products')

    Tracker.autorun(() => {
      let products = Products.find({ _id: this.props.match.params.id }, { sort: { createdAt: -1 } }).fetch()
      let product = products[0]

      this.setState({
        product
      })
    })
  }

  onAddClick() {
    const arr = Session.get('basket')
    const item = (arr.filter((i) => i.product._id === this.state.product._id))[0]

    if (item === undefined) {
      arr.push({
        product: this.state.product,
        count: 1
      })
    } else {
      item.count++
    }

    Session.set('basket', arr)
    browserHistory.push('/basket')
  }

  render() {
    return (
      <div className="container">
        <br/>
        {this.state.product ?
          <div className="product-details">
            <div className="product-image-noanim" style={{backgroundImage: `url('${this.state.product.url}')`}}></div>
            <div className="product-details-data">
              <h2>{this.state.product.text}</h2>
              <p>{this.state.product.description}</p>
              <button onClick={this.onAddClick}>Buy</button>
            </div>
          </div>
          : ''
        }
      </div>
    )
  }
}
