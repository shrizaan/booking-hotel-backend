const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
  imageId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemImage',
  }],
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  itemFeatureId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemFeature',
  }],
  itemActivityId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemActivity',
  }],
});

module.exports = mongoose.model('Item', ItemSchema) || mongoose.models.Item;
