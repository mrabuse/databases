var models = require('../models');
var http = require('http');



module.exports = {
  messages: {
    get: function (req, res) {
      var result = models.messages.get();
      console.log('result inception', result);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //parse request string
      var message;
      var username;
      var roomname;

      models.messages.post(message, username, roomname);
    }
 // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {}, // a function which handles a get request for all users (???)
    post: function (req, res) {} // a function which handles posting a user to the database
  }
};

