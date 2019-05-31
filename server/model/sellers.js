var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SellersSchema = new Schema({
    name:{
        type:String
    },
    // address:{
        area:{
            type:String
        },
        city:{
            type:String
        },
        district:{
            type:String
        },
        state:{
            type:String
        }
    // }
})

var seller = module.exports = mongoose.model('seller', SellersSchema);