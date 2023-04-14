var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/gas');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/gases', costume_controller.gases_create_post);
// DELETE request to delete Costume.
router.delete('/gases/:id', costume_controller.gases_delete);
// PUT request to update Costume.
router.put('/gases/:id', costume_controller.gases_update_put);
// GET request for one Costume.
router.get('/gases/:id', costume_controller.gases_detail);
// GET request for list of all Costume items.
router.get('/gases', costume_controller.gases_list);
module.exports = router;
