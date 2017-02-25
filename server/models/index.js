var db = require('../db');

db.dbConnection.connect();

module.exports = {
  messages: {
    get: function () {
      var queryString = 'SELECT messages.message, user.name, room.name FROM messages INNER JOIN user ON user.id = messages.user INNER JOIN room ON room.id = messages.id;';
      db.dbConnection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
        
        console.log('result!', result);
        return result;
      });
    }, // a function which produces all the messages
    post: function (message, username, roomname) {
      var queryString1 = 'INSERT INTO user (id, name) VALUES (null, ?)';
      var queryArg1 = [username];
      var queryString2 = 'INSERT INTO room (id, name) VALUES (null, ?)';
      var queryArg2 = [roomname];
      var queryString3 = 'INSERT INTO messages (id, message, user, room) SELECT null, ?, user.id, room.id FROM user INNER JOIN room WHERE user.name = ? AND room.name = ?';
      var queryArg3 = [message, username, roomname];

      db.dbConnection.query(queryString1, queryArg1, function(err, result) {
        if (err) {
          console.error('ya done goofed');
        }

        console.log('hey hey ' + result);
      });

      db.dbConnection.query(queryString2, queryArg2, function(err, result) {
        if (err) {
          console.error('ya done goofed');
        }

        console.log('hey hey ' + result);
      });

      db.dbConnection.query(queryString3, queryArg3, function(err, result) {
        if (err) {
          console.error('ya done goofed');
        }

        console.log('hey hey ' + result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
    // a function which produces all the users (???)
    },
    post: function () {
      // a function which can be used to insert a user into the database

    }
  }
};

db.dbConnection.end();
