var express = require('express');
var router = express.Router();

//Add Routes
router.use(require('./formSubmit'));

module.exports = router;
