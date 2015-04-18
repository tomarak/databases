var models = require('../models');
var bluebird = require('bluebird');


  module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controller get, messages:');
      models.messages.get(req);
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('controller post, messages:');
      models.messages.post(req);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req);
    },
    post: function (req, res) {
      models.users.post(req);
      console.log('controller post, users:');
    }
  }
};

