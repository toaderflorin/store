import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const Tasks = new Mongo.Collection('tasks')

if (Meteor.isServer) {
  Meteor.publish('tasks', function () {
    return Tasks.find()
  })
}

Meteor.methods({
  'tasks.insert'(text) {
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized')
    }

    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().emails[0].address,
    })
  },

  'tasks.remove'(taskId) {
    const task = Tasks.findOne(taskId)
    Tasks.remove(taskId)
  },

  'tasks.setChecked'(taskId, setChecked) {
    const task = Tasks.findOne(taskId)
    Tasks.update(taskId, {
      $set: {
        checked: setChecked
      }
    })
  },

  'tasks.setPrivate'(taskId, setToPrivate) {
    const task = Tasks.findOne(taskId)
    Tasks.update(taskId, {
      $set: {
        private: setToPrivate
      }
    })
  },
})
