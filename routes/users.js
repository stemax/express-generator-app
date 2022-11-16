const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const users = [{id:1, name:'Test user 1'}, {id:2, name:'Test user 2'},]
  res.send(users);
});

module.exports = router;
