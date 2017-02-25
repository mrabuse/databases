var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT messages.id, messages.message, messages.roomname, user.name \
      FROM messages LEFT OUTER JOIN user ON (user.id = messages.user) \
      order by messages.id desc';
      db.query(queryString, function (err, results) {
        callback(err, results);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryString = 'INSERT INTO messages (messages, user, roomname) \
                        VALUES (?, (select id from user where name = ? limit 1), ?)';
      db.query(queryString, params, function (err, results) {
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
    // a function which produces all the users (???)
      var queryString = 'SELECT * FROM user';
      db.query(queryString, function (err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // a function which can be used to insert a user into the database
      var queryString = 'INSERT INTO user (name) VALUES (?)';
      db.query(queryString, params, function (err, results) {
        callback(err, results);
      });
    }
  }
};

db.dbConnection.end();
