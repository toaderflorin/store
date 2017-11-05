import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
  'users.insert'(username, password, fullname) {
    check(username, String)
    check(password, String)
    check(fullname, String)

    Accounts.createUser({
      username: username,
      email: username,
      password: password,
      profile: {
        name: fullname
      }
    })
  }
})
