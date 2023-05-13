const mongoose=require("mongoose")

const userSchema = mongoose.Schema({
firstname  : String,
lastname  : String,
mmddyy:String,
zipcode:Number,
gender : String,
email : String,
password : String,
mobilenumber : Number

})

const userModel = mongoose.model("user",userSchema)

module.exports={userModel}
