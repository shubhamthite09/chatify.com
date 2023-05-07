const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avtar: { type: String },
  mobile: { type: Number },
  lastLogin:{ type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["user"],
    default: "user",
  },
  isActive: { type: Boolean, required: true},
});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
