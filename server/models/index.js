var db = require('../db');




module.exports = {
  messages: {
    get: function (req, res) {
      //db.connect();
      var queryString = "SELECT text FROM messages";
      db.query(queryString, [], function(err, results){
        console.log("=========MODEL MESSAGE GET RESULTS: ", results);
      })
      //db.end();
    }, // a function which produces all the messages
    post: function (req, res) {
      var queryString = "INSERT into messages (id, text, user, roomname) values(1, 'TEST POST MSG STRING', 'asdf', 'someroom')";
        db.query(queryString, [], function(err, results){
        console.log("=========MODEL MESSAGE POST RESULTS: ", results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      var queryString = "SELECT user FROM users";
      db.query(queryString, [], function(err, results){
        console.log("=========MODEL USER GET RESULTS: ", results);
      });
    },

    post: function (req, res) {
      var queryString = "INSERT into users (user) values ('vince')";
      db.query(queryString, [], function(err, results){
        // console.log("=========MODEL USER POST RESULTS: ", results);
      });
    } // a function which can be used to insert a message into the database
  }
};

