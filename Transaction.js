const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['credit', 'debit'],
        required: true
    },
    region: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);  // Correct 'Transaction'
