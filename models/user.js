import mongoose from "mongoose";
var Schema = mongoose.Schema;

// create a schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  password: {
    type: String
  }
});
// const comparePassword = (userPassword,  callback)=>{
// compare(candidatePassword,  (err, isMatch) => {
//     if(err) throw err;
//     callback(null, isMatch);
//   });
// }

// export const User = mongoose.model("User", userSchema);
const User = (module.exports = mongoose.model("User", UserSchema));
