const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


class Meal {
  all() {
    return database.raw('SELECT * FROM meals')
  }
  allMealsWithFoods() {
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
  groupFoodsByMeal(collection) {
    return collection.then((data) => {
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
  show(id) {
    return database.raw(`SELECT meals.id AS meal_id,
      meals.name AS meal_name,
      foods.id AS food_id,
      foods.name AS food_name,
      foods.calories AS food_calories FROM meals INNER JOIN meal_foods ON meals.id = meal_foods.meal_id
      INNER JOIN foods ON foods.id = meal_foods.food_id
      WHERE meal_id = ?`, id)
  }
  validateFoodExists(food_id) {
    return database.raw(`SELECT * FROM foods WHERE id= ?`, food_id)
      .then((data) => {
        if (data.rowCount > 0) {
          return true
        } else {
          return false
        }
      })
  }
  validateMealExists(meal_id) {
    return database.raw(`SELECT * FROM meals WHERE id = ?`, meal_id)
    .then((data) => {
      if (data.rowCount > 0) {
        return true
      } else {
        return false
      }
    })
  }
  create(meal_id, food_id) {
    if (this.validateFoodExists(food_id).then((result) => result)
     && this.validateMealExists(meal_id).then((result) => result)) {
      return database.raw(`INSERT INTO meal_foods(meal_id, food_id)
      VALUES(?, ?)`, [meal_id, food_id])
    } else {
      return false
    }
  }
  destroy(meal_id, food_id) {
    if (this.validateFoodExists(food_id).then((result) => result)
     && this.validateMealExists(meal_id).then((result) => result)) {
      return database.raw(`DELETE FROM meal_foods WHERE id in (SELECT id FROM  meal_foods WHERE meal_foods.meal_id=? AND meal_foods.food_id =? LIMIT 1)`, [meal_id, food_id])
    } else {
      return false
    }
  }
}






module.exports = Meal
