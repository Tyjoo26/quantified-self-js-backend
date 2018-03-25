const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


class Meal {
  all() {
    return database.raw(`SELECT meals.id AS meal_id, meals.name AS meal_name, foods.id AS food_id, foods.name AS food_name, foods.calories AS food_calories FROM meals INNER JOIN meal_foods ON meals.id = meal_foods.meal_id INNER JOIN foods on foods.id = meal_foods.food_id`)
  }
}






module.exports = Meal
