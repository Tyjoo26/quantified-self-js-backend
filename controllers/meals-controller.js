var Meal = require('../models/meal')

let meals = new Meal



class MealsController {
  index(req, res) {
    meals.all()
    .then((data) => {
      let rows = data.rows
      let mealFoods = rows.reduce((result, row) => {
        if (!result[row.meal_id]) {
          result[row.meal_id] = {id: row.meal_id, name: row.meal_name, foods: []}
        }
        result[row.meal_id].foods.push({id: row.food_id, name: row.food_name, calories: row.food_calories})
        return result
      }, {})
      let mealOutput = []
      for (let meal in mealFoods) {
        mealOutput.push(mealFoods[meal])
      }
      res.send(mealOutput)
    })
  }
}


module.exports = MealsController
