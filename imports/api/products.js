import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const Products = new Mongo.Collection('products')

if (Meteor.isServer) {
  Meteor.publish('products', function () {
    return Products.find({
      // owner: {
      //   $eq: Meteor.userId()
      // }
    })
  })
}

Meteor.methods({
  'products.search'() {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized')
    }
  },

  'products.insert'(product) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized')
    }

    Products.insert({
      text: product.text,
      url: product.url,
      description: product.description,
      price: product.price,
      createdAt: new Date(),
      owner: Meteor.userId(),
    })
  },

  'products.remove'(productId) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized')
    }

    Products.remove(productId)
  },
})
