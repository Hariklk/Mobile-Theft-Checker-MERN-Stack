const express = require('express');
const router = express.Router();
const Phone = require('../models/Phone');

// API to check IMEI status
router.get('/:imei', async (req, res) => {
  try {
    const phone = await Phone.findOne({ imei: req.params.imei });
    if (!phone) {
      return res.json({ found: false, message: 'IMEI not found' });
    }
    res.json({
      found: true,
      stolen: phone.stolen,
      message: phone.stolen ? 'This phone is reported stolen.' : 'This phone is clear.'
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API to add a phone IMEI
router.post('/', async (req, res) => {
  try {
    const phone = new Phone(req.body);
    await phone.save();
    res.status(201).json(phone);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
