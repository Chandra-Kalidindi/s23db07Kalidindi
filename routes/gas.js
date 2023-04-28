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
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET gass */
router.get('/', gas_controlers.gases_view_all_Page );
/* GET detail gas page */
router.get('/detail',secured, gas_controlers.gas_view_one_Page);
/* GET create gas page */
router.get('/create',secured, gas_controlers.gas_create_Page);
/* GET create update page */
router.get('/update',secured, gas_controlers.gas_update_Page);
/* GET delete gas page */
router.get('/delete',secured, gas_controlers.gas_delete_Page);
module.exports = router;