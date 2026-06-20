const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  resort: { type: mongoose.Schema.Types.ObjectId, ref: 'Resort', required: true },
  roomNumber: { type: String, required: true },
  type: { type: String, enum: ['single', 'double', 'suite', 'deluxe', 'villa'], required: true },
  capacity: { type: Number, required: true },
  pricePerNight: { type: Number, required: true },
  amenities: [String],
  images: [String],
  description: String,
  isAvailable: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Room', roomSchema);
