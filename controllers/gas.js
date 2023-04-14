const gas = require('../models/gas');
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
// for a specific gas.
exports.gases_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: gas detail: ' + req.params.id);
};


// Handle gas create on POST.
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
// Handle gas delete form on DELETE.
exports.gases_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: gas delete DELETE ' + req.params.id);
};
// Handle gas update form on PUT.
exports.gases_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: gas update PUT' + req.params.id);
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
// for a specific gas.
   exports.gases_detail = async function(req, res) {
   console.log("detail" + req.params.id)
   try {
   result = await Gas.findById( req.params.id)
   res.send(String(result))
   console.log(result)
   } catch (error) {
   res.status(500)
   res.send(`{"error": document for id ${req.params.id} not found`);
   }
   };
// Handle gas update form on PUT.
   exports.gases_update_put = async function(req, res) {
   console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
   try {
   let toUpdate = await Gas.findById( req.params.id)
   // Do updates of properties
   if(req.body.gas_name)
   toUpdate.gas_name = req.body.gas_name;
   if(req.body.quantity) toUpdate.quantity = req.body.quantity;
   if(req.body.types) toUpdate.types = req.body.types;
   let result = await toUpdate.save();
   console.log("Sucess " + result)
   res.send(result)
   } catch (err) {
   res.status(500)
   res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
   }
   };  