const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  id: { type: String,  unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferred_genres: [{ type: String }],
  age: { type: Number },
  name: { type: String }
}, { collection: 'User' });

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;