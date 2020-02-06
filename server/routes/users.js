const express = require('express');
const router = express.Router();
const user = require('../controller/user');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/', user.create);


router.get('/user/:email', user.find);


router.put('/update', user.update);

router.delete('/', user.delete);

module.exports = router;
