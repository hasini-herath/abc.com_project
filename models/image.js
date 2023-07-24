// models/Image.js
import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default Image;
