const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userId:{type:String,required:true},
    consId:{type:Number,required:true},
    frendId:{type:String,required:true},
    frendName:{type:String,required:true}
});

const conModel = mongoose.model("conversions", userSchema);

module.exports = { conModel };