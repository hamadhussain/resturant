import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
    email : {
    type: String,
    required:true,
  },

  password: {
    type: String,
  },
  about:String,
  profileURL:String
  
});
const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User

// _models_user__WEBPACK_IMPORTED_MODULE_1__.js

// export class User {
//   constructor(name) {
//       this.name = name;
//   }
// }

