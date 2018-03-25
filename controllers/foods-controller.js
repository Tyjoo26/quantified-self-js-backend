var Food = require('../models/food')

let foods = new Food

class FoodsController {
  index(req, res) {
    foods.all()
      .then((data) => {res.send(data.rows)})
  }

  show(req, res) {
    foods.find(req.params.id)
      .then((data) => {res.send(data.rows)})
  }

  create(req, res) {
    foods.create(req.body.food)
      .then((data) => {res.send(data.rows)})
  }

  update(req, res) {
    foods.update(req.params.id, req.body.food)
      .then((data) => {res.send(data.rows)})
  }
}

module.exports = FoodsController
