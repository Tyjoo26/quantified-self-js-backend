var Meal = require('../models/meal')

Meal = new Meal

class MealsController {
  index(req, res) {
    Meal.mealsWithFoods()
      .then((data) => {res.send(data)})
  }
}


module.exports = MealsController
