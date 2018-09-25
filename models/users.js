const config = require('config-lite')(__dirname);
const Mongolass = require('mongolass');
const mongolass = new Mongolass();
const User = require('../lib/mongo').User;


module.exports = {
  create: function create(user) {
    return User.create(user).exec();
  },

  getUserByName: function getUserByName(name) {
    return User.findOne({ name: name }).addCreatedAt().exec();
  }
}
