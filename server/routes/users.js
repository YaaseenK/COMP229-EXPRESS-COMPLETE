/* COMP229Assignment1 */
/* Student Name: Yaaseen Khan */
/* Student Number: 301164475 */
/* OCT/9/2021 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
