const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  accountHolder: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Bank', BankSchema) || mongoose.models.Bank;
