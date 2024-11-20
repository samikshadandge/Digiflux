const express = require('express');
const Transaction = require('../models/Transaction');  // Correct 'Transaction'
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const transaction = new Transaction(req.body);  // Correct 'Transaction'
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();  // Correct 'Transaction'
        res.json(transactions);  // Change 'res.send()' to 'res.json()' for consistency
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTransaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id);
        res.json({ message: 'Transaction deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
