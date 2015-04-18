var controllers = require('./controllers');
var router = require('express').Router();
for (var route in controllers) {

  router.route("/" + route) //classes/users or classes/messages
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

