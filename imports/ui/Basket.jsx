import React, { Component, PropTypes } from 'react'
import { Session } from 'meteor/session'
import { browserHistory } from '../../client/main.jsx'
import classnames from 'classnames'

export default class Basket extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    const basket = Session.get('basket')
    if (!basket) {
      browserHistory.push('/login')
    }
  }

  render() {
    const basket = Session.get('basket')
    const obj = basket.map((i) => <div className="basket-item" key={(Math.random() * 100000).toString()}>{i.text}</div>)

    return (
      <div className="container">
        {obj}
      </div>
    )
  }
}
