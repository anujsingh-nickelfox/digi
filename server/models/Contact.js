const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  course: {
    type: String,
    required: [true, 'Course selection is required']
  },
  message: {
  type: String,
  required: [true, 'Message is required'],
  minlength: [10, 'Message must be at least 10 characters long'] 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', contactSchema);