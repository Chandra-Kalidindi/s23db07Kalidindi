var Gas = require('../models/gas');

// List of all Costumes
exports.gases_list = async function(req, res) {
    try{
    theCostumes = await Gas.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Costume.
exports.gases_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};


// Handle Costume create on POST.
exports.gases_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Gas();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gas_name":"goat", "quantity":12, "types":"large"}
    document.gas_name = req.body.gas_name;
    document.quantity = req.body.quantity;
    document.types = req.body.types;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Costume delete form on DELETE.
exports.gases_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.gases_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};

// Handle a show all view
exports.gases_view_all_Page = async function(req, res) {
    try{
    theCostumes = await Gas.find();
    res.render('gas', { title: 'Gas Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };