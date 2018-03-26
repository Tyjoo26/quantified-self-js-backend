var express = require('express');
var router = express.Router();
var MealsController = require('../../../controllers/meals-controller')

let mealsController = new MealsController


router.get("/", mealsController.index)

router.get('/:id/foods', mealsController.show)

router.post("/:meal_id/foods/:food_id", mealsController.create)

router.delete("/:meal_id/foods/:food_id", mealsController.destroy)

module.exports = router;
