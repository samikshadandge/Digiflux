const initialState = { transactions: [] };

const transactionReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRANSACTION':
      return { ...state, transactions: action.payload };
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [...state.transactions, action.payload] };
    case 'UPDATE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.map(tx =>
          tx._id === action.payload._id ? action.payload : tx
        )
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(tx => tx._id !== action.payload)
      };
    default:
      return state;
  }
};

export default transactionReducers;
