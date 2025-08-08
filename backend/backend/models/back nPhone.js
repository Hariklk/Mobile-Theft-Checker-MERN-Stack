const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
  imei: { type: String, required: true, unique: true },
  stolen: { type: Boolean, default: false }
});

module.exports = mongoose.model('Phone', PhoneSchema);
