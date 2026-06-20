const express = require('express');
const Review = require('../models/Review');
const Resort = require('../models/Resort');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// Create review
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { resortId, bookingId, rating, title, comment } = req.body;
    const review = new Review({
      user: req.user.id,
      resort: resortId,
      booking: bookingId,
      rating,
      title,
      comment,
    });
    await review.save();
    res.status(201).json({ success: true, review });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get reviews for resort
router.get('/resort/:resortId', async (req, res) => {
  try {
    const reviews = await Review.find({ resort: req.params.resortId }).populate('user', 'firstName lastName profileImage');
    res.json({ success: true, reviews });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
