import axios from 'axios';

// Fetch transactions from the backend
export const fetchTransaction = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/transactions');
    dispatch({
      type: 'FETCH_TRANSACTION',
      payload: response.data
    });
  } catch (err) {
    console.error(err);
  }
};

// Add a new transaction
export const addTransaction = (transaction) => async (dispatch) => {
  try {
    const response = await axios.post('/api/transactions', transaction);
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: response.data
    });
  } catch (err) {
    console.error(err);
  }
};

// Delete a transaction
export const deleteTransaction = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/transactions/${id}`);
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  } catch (err) {
    console.error(err);
  }
};

// Update a transaction
export const updateTransaction = (id, transaction) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/transactions/${id}`, transaction);
    dispatch({
      type: 'UPDATE_TRANSACTION',
      payload: response.data
    });
  } catch (err) {
    console.error(err);
  }
};
