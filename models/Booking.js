const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  itemId: [{
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    night: {
      type: Number,
      required: true,
    },
  }],
  memberId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
  }],
  bankId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bank',
  }],
  proofPayment: {
    type: String,
    required: true,
  },
  bankFrom: {
    type: String,
    required: true,
  },
  accountHolder: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Booking', BookingSchema) || mongoose.models.Booking;
