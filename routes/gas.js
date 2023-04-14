// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('gas', { title: 'Search Results Gas' });
// });

// module.exports = router;

var express = require('express');
const gas_controlers= require('../controllers/gas');
var router = express.Router();
/* GET costumes */
router.get('/', gas_controlers.gases_view_all_Page );
module.exports = router;