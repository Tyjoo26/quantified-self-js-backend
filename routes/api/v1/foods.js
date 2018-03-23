var express = require('express');
var router = express.Router();

const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)

/* GET home page. */
router.get('/', function(req, res, next) {
  database.raw('SELECT * FROM foods')
    .then((data) => {res.send(data.rows)})
});

module.exports = router;
