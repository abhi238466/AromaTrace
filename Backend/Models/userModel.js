import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true , 'password is required']
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  sales: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sale"
    }
  ],
});

const User = mongoose.model('User', userSchema);

export default User;

// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//     trim: true
//   },

//   password: {
//     type: String,
//     default: null
//   },

//   githubId: {
//     type: String,
//     default: null
//   },

//   authProvider: {
//     type: String,
//     enum: ["local", "github"],
//     default: "local"
//   },

//   products: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Product"
//     }
//   ],

//   sales: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Sale"
//     }
//   ]
// });

// const User = mongoose.model("User", userSchema);

// export default User;