var express = require('express');
var router = express.Router();

const skillController = require('../controllers/skills')


router.get('/', skillController.index)
router.get('/:id', skillController.show)

module.exports = router;
