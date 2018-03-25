const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Food {
  all() {
    return database.raw('SELECT * FROM foods')
  }
  find(id) {
    return database.raw('SELECT * FROM foods WHERE id= ?', id)
  }
  create(params) {
    return database.raw(`INSERT INTO foods(name, calories)
    VALUES(?, ?)
    RETURNING *`, [params.name, params.calories])
  }
  update(id, params) {
    return database.raw(`UPDATE foods
      SET name = ?, calories = ?
      WHERE id = ?
      RETURNING *`, [params.name, params.calories, id])
  }
  destroy(id) {
    return database.raw(`DELETE FROM foods WHERE id= ?`, id)
  }
}

module.exports = Food
