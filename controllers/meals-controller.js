var Meal = require('../models/meal')

Meal = new Meal

class MealsController {
  index(req, res) {
    Meal.mealsWithFoods()
      .then((data) => {res.send(data)})
  }
  show(req,res) {
    meals.show(req.params.id)
      .then((data) => )
  }
}


module.exports = MealsController
