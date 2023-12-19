const mongoose = require('mongoose');

const ItemActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('ItemActivity', ItemActivitySchema) || mongoose.models.ItemActivity;
