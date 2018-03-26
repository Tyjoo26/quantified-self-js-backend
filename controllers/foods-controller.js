var Food = require('../models/food')
Food = new Food

class FoodsController {
  index(req, res) {
    Food.all()
      .then((data) => {res.send(data.rows)})
  }

  show(req, res) {
    Food.find(req.params.id)
      .then((data) => {res.send(data.rows)})
  }

  create(req, res) {
    Food.create(req.body.food)
      .then((data) => {res.send(data.rows[0])})
  }

  update(req, res) {
    Food.update(req.params.id, req.body.food)
      .then((data) => {res.send(data.rows[0])})
  }

  destroy(req, res) {
    Food.destroy(req.params.id)
      .then((data) => {res.send(data.rows)})
  }
}

module.exports = FoodsController
