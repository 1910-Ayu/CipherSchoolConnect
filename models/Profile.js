const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  about:{
    type:String,
  },

  linkedin: {
    type: String
  },
  github: {
    type: String
  },
  facebook: {
    type: String
  },
  twitter: {
    type: String
  },
  instagram: {
    type: String
  },
  website:{
    type:String,
  },
 
  interests: {
    type: [String],
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
  ],

  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);
