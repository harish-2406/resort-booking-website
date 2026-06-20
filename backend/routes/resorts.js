const express = require('express');
const Resort = require('../models/Resort');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get all resorts
router.get('/', async (req, res) => {
  try {
    const resorts = await Resort.find().populate('reviews');
    res.json({ success: true, resorts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get resort by ID
router.get('/:id', async (req, res) => {
  try {
    const resort = await Resort.findById(req.params.id).populate('reviews');
    if (!resort) {
      return res.status(404).json({ success: false, message: 'Resort not found' });
    }
    res.json({ success: true, resort });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Create resort (admin)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const resort = new Resort({ ...req.body, owner: req.user.id });
    await resort.save();
    res.status(201).json({ success: true, resort });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Update resort (admin)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const resort = await Resort.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!resort) {
      return res.status(404).json({ success: false, message: 'Resort not found' });
    }
    res.json({ success: true, resort });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete resort (admin)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const resort = await Resort.findByIdAndDelete(req.params.id);
    if (!resort) {
      return res.status(404).json({ success: false, message: 'Resort not found' });
    }
    res.json({ success: true, message: 'Resort deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
