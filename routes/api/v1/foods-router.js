var express = require('express');
var router = express.Router();
var FoodsController = require('../../../controllers/foods-controller')

let foodsController = new FoodsController

router.get('/', function(req, res) {
  foodsController.index(req, res)
});

module.exports = router;
