const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  id: {
    type: String
  },
    email: {
      type: String
    },
  password: {
    type: String
  },
  preferred_genres: {
    type: [String]
  },
  dateOfBirth: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
}, { collection: 'User' });

// Create the User model
const Users = mongoose.model('User', userSchema, "User");

module.exports = Users;