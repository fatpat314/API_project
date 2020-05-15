const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate")


 const UserSchema = new Schema({
     username: {type: String, unique: true, required: true},
     password: {type: String, require: true},
 })

 UserSchema.pre("save", function(next){

     //encrypt password
     const user = this;
     if (!user.isModified("password")){
         return next();
     }
     bcrypt.genSalt(10, (err, salt) => {
         bcrypt.hash(user.password, salt, (err, hash) => {
             user.password = hash;
             next();
         });
     });
 });

 UserSchema.methods.comparePassword = function(password, done) {
     bcrypt.compare(password, this.password, (err, isMatch) => {
         done(err, isMatch);
     });
 };

 module.exports = mongoose.model("User", UserSchema)










// const environment = process.env.NODE_ENV;
// // const stage = require('./config.js')[environment];
//
// // schema maps to a collection
// const Schema = mongoose.Schema;
//
// const userSchema = new Schema({
//   name: {
//     type: 'String',
//     required: true,
//     trim: true,
//     unique: true
//   },
//   password: {
//     type: 'String',
//     required: true,
//     trim: true
//   }
// });
//
// // encrypt password before save
// userSchema.pre('save', function(next) {
//   const user = this;
//   if(!user.isModified || !user.isNew) { // don't rehash if it's an old user
//     next();
//   } else {
//     bcrypt.hash(user.password, 10, function(err, hash) {
//       if (err) {
//         console.log('Error hashing password for user', user.name);
//         next(err);
//       } else {
//         user.password = hash;
//         next();
//       }
//     });
//   }
// });
//
// module.exports = mongoose.model('User', userSchema);
