'use strict';

const mongoose = require('mongoose');

const Uploads = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    author: {
      type: String,
      required: 'Author name is required',
      maxLength: 20,
      match: [/^[a-zA-Z0-9-_.]+$/, 'Please fill a valid username']
    },
    title: {
      type: String,
      required: 'Title is required',
      maxLength: 20
    },
    audio_url: {
      type: String,
      required: true,
    },
    uploaded_by: {
      type: String,
      required: 'creator name is required',
      maxLength: 20,
      match: [/^[a-zA-Z0-9-_.]+$/, 'Please fill a username']
    },
    created_at: {
      type : Date, 
      default: Date.now 
    },
    month: {type: String, required: true}
})

Uploads.index({
    author: 1,
    title: 1,
  }, {
    unique: true,
});

module.exports = mongoose.model('Uploads', Uploads);