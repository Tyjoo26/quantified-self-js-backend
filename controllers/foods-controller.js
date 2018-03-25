var Food = require('../models/food')

let food = new Food

class FoodsController {
  index(req, res) {
    food.all()
      .then((data) => {res.send(data.rows)})
  }
}

module.exports = FoodsController
