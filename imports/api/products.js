import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const Products = new Mongo.Collection('products')

if (Meteor.isServer) {
  Meteor.publish('products', function () {
    return Products.find()
  })
}

Meteor.methods({
  'products.insert'(text) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized')
    }

    Products.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().emails[0].address,
    })
  },

  'products.remove'(productId) {
    // const task = Products.findOne(productId)
    Products.remove(productId)
  },

  // 'products.setChecked'(taskId, setChecked) {
  //   const task = Tasks.findOne(taskId)
  //   Tasks.update(taskId, {
  //     $set: {
  //       checked: setChecked
  //     }
  //   })
  // },

  // 'products.setPrivate'(taskId, setToPrivate) {
  //   const task = Tasks.findOne(taskId)
  //   Tasks.update(taskId, {
  //     $set: {
  //       private: setToPrivate
  //     }
  //   })
  // },
})
