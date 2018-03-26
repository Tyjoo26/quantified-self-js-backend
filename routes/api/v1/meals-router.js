var express = require('express');
var router = express.Router();
var MealsController = require('../../../controllers/meals-controller')

let mealsController = new MealsController


router.get("/", function(req, res) {
  mealsController.index(req, res)
})

router.get('/:id/foods', function(req, res) {
  mealsController.show(req, res)
})





module.exports = router;
