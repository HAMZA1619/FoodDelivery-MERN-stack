const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { 
        type: String,
        required: true,
        min: 3 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    role: { 
        type: String,
        default: "client",
        enum: ["admin", "client" , "owner"]
    },
    password: { 
        type: String, 
        required: true, 
        min: 8 
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);
module.exports = User;
