'use strict';

const mongoose = require('mongoose');

const Uploads = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    author: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    audio_url: {
      type: String,
      required: true,
    },
    uploaded_by: {
      type: String,
      required: true,
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