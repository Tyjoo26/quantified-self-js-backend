const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


class Meal {
  all() {
    return database.raw(`
      SELECT meals.id AS meal_id,
             meals.name AS meal_name,
             foods.id AS food_id,
             foods.name AS food_name,
             foods.calories AS food_calories
             FROM meals
      INNER JOIN meal_foods ON meals.id = meal_foods.meal_id
      INNER JOIN foods on foods.id = meal_foods.food_id`)
  }
  mealsWithFoods() {
    return this.all()
      .then((data) => {
        let rows = data.rows
        let mealFoods = rows.reduce((result, row) => {
          if (!result[row.meal_id]) {
            result[row.meal_id] = {
              id: row.meal_id,
              name: row.meal_name,
              foods: []}
          }
          let food = {
            id: row.food_id,
            name: row.food_name,
            calories: row.food_calories
          }
          result[row.meal_id].foods.push(food)
          return result
        }, {})
        let mealOutput = []
        for (let meal in mealFoods) {
          mealOutput.push(mealFoods[meal])
        }
        return mealOutput
      })
  }
}






module.exports = Meal
