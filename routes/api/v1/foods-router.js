var express = require('express');
var router = express.Router();
var FoodsController = require('../../../controllers/foods-controller')

let foodsController = new FoodsController

router.get('/', foodsController.index);

router.get('/:id', foodsController.show);

router.post("/", foodsController.create)

router.patch("/:id", foodsController.update)

router.delete("/:id", foodsController.destroy)

module.exports = router;
