import React, { Component, PropTypes } from 'react'
import Header from './Header.jsx'

export default class ProductDetails extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    // alert(this.props.match.params.id)
    return (
      <div>
        <Header/>
        <div className="container">
          This is the product detail page.
        </div>
      </div>
    )
  }
}
