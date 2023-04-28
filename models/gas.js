const mongoose = require("mongoose")
const gasSchema = mongoose.Schema({
    gas_name: {
        type: String,
        
    },
    quantity: {
        type:Number,
        required:true,
        min:1,
        max:1000,
        validate:{
            validator:function(value){
                return "quantity non negative and less than 1000 "
            },
            
        }
    
    
    },
    types: {
        type: String,
        
    }
})
module.exports = mongoose.model("gas",gasSchema)