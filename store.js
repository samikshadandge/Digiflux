import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,  // Add your root reducer
});

export default store;
