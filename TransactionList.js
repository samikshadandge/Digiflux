import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransaction, deleteTransaction } from './actions/transactionAction';

const TransactionList = () => {
  const { transactions } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransaction());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx._id}>
            {tx.amount} - {tx.type} - {tx.region}
            <button onClick={() => handleDelete(tx._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
