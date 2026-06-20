const express = require('express');
const Room = require('../models/Room');
const Booking = require('../models/Booking');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get rooms by resort
router.get('/resort/:resortId', async (req, res) => {
  try {
    const rooms = await Room.find({ resort: req.params.resortId });
    res.json({ success: true, rooms });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Check room availability
router.post('/:id/check-availability', async (req, res) => {
  try {
    const { checkInDate, checkOutDate } = req.body;
    const bookings = await Booking.find({
      room: req.params.id,
      status: { $in: ['confirmed', 'pending'] },
      $or: [
        { checkInDate: { $lt: new Date(checkOutDate) }, checkOutDate: { $gt: new Date(checkInDate) } },
      ],
    });
    const isAvailable = bookings.length === 0;
    res.json({ success: true, isAvailable });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Create room (admin)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    res.status(201).json({ success: true, room });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
