var express = require('express');
var router = express.Router();
var MealsController = require('../../../controllers/meals-controller')

let mealsController = new MealsController


router.get("/", function(req, res) {
  mealsController.index(req, res)
})






module.exports = router;
