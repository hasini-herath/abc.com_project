// models/user.js
import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add any other fields you need for the user model
});

export default mongoose.models.Customer || mongoose.model('Customer', customerSchema);
