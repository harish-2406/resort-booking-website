const mongoose = require('mongoose');

const resortSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  galleryImages: [String],
  location: {
    address: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
    latitude: Number,
    longitude: Number,
  },
  amenities: [String],
  rating: { type: Number, min: 0, max: 5, default: 4.5 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Resort', resortSchema);
