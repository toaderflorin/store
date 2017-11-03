import React, { Component, PropTypes } from 'react'

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.product)
  }

  render() {
    return (
      <div style={{ padding: '7px', backgroundColor: '#f3f3f3', marginBottom: '4px'}}>{this.props.product.text}</div>
    )
  }
}
