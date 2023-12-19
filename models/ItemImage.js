const mongoose = require('mongoose');

const ItemImageSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ItemImage', ItemImageSchema) || mongoose.models.ItemImage;
