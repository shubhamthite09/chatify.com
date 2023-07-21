const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
    groupName:{type:Number,required:true},
    membersId:{type:[String],required:true}
});

const groupModel = mongoose.model("conversions", groupSchema);

module.exports = { groupModel };
