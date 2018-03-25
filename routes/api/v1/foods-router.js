var express = require('express');
var router = express.Router();
var FoodsController = require('../../../controllers/foods-controller')

let foodsController = new FoodsController

router.get('/', function(req, res) {
  foodsController.index(req, res)
});

router.get('/:id', function(req, res) {
  foodsController.show(req, res)
});

router.post("/", function(req, res) {
  foodsController.create(req, res)
})

module.exports = router;
