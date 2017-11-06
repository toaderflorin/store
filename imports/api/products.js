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

  },
  
  'products.insert'(text) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized')
    }

    Products.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
    })
  },

  'products.remove'(productId) {
    Products.remove(productId)
  },
})
