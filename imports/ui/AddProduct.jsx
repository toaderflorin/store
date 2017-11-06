
import React, { Component, PropTypes } from 'react'

export default class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.onAddClick = this.onAddClick.bind(this)
  }

  onAddClick() {
    alert('Click!')
  }

  render() {
    return (
      <div className="container">
        <h2>Add Item</h2>
        <div>
          <div>
            <b>Text</b>
          </div>
          <input className="add-product" type="text" ref="textInput" placeholder="Text" />
        </div>
        <div>
          <div>
            <b>Bla</b>
          </div>
          <input className="add-product" type="text" ref="textInput" placeholder="URL" />
        </div>
        <div>
          <button onClick={this.onAddClick}>Add</button>
        </div>
      </div>
    )
  }
}
