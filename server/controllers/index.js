var models = require('../models');
var http = require('http');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          throw err;
        }
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //parse request string
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });
    }
 // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          throw err;
        }
        res.json(results);
      });
    }, // a function which handles a get request for all users (???)
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a user to the database
  }
};

