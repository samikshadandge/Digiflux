import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from './actions/transactionAction';

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    type: 'credit',
    region: ''
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction(formData));
    setFormData({ amount: '', type: 'credit', region: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />
      <select
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      >
        <option value="credit">Credit</option>
        <option value="debit">Debit</option>
      </select>
      <input
        type="text"
        placeholder="Region"
        value={formData.region}
        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TransactionForm;
