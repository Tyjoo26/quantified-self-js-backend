var Food = require('../models/food')
Food = new Food

class FoodsController {
  index(req, res, next) {
    Food.all()
      .then((data) => {res.send(data.rows)})
  }

  show(req, res, next) {
    Food.find(req.params.id)
      .then((data) => {res.send(data.rows)})
  }

  create(req, res, next) {
    Food.create(req.body.food)
      .then((data) => {
        console.log(data.rows[0])
        res.send(data.rows[0])
      })
  }

  update(req, res, next) {
    Food.update(req.params.id, req.body.food)
      .then((data) => {res.send(data.rows[0])})
  }

  destroy(req, res, next) {
    Food.destroy(req.params.id)
      .then((data) => {res.send(data.rows)})
  }
}

module.exports = FoodsController
