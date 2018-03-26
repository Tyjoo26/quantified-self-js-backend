var Meal = require('../models/meal')

let meals = new Meal

class MealsController {
  index(req, res) {
    meals.mealsWithFoods(meals.all())
      .then((data) => res.send(data))
  }
  show(req,res) {
    meals.mealsWithFoods(meals.show(req.params.id))
      .then((data) => res.send(data[0]))
  }
  create(req, res) {
    meals.create(req.params.meal_id, req.params.food_id)
      .then((data) => {
        if (data === false) {
          res.status(404).send()
        } else {
          res.send()
        }
      })
  }
  destroy(req,res) {
    meals.destroy(req.params.meal_id, req.params.food_id)
      .then((data) =>  {
        if (data === false) {
          res.status(404).send()
        } else {
          res.send()
        }
      })
  }
}


module.exports = MealsController
