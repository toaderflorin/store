import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'
import { Session } from 'meteor/session'

Meteor.methods({
  'store.insert'(text) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized')
    }

    const store = Session.get('store')

    if (!store) {
      store = []
      Session.set('store', store)
    }
  },

  'store.remove'(text) {
  }
})
