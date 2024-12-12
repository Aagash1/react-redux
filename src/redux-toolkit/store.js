import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import notesReducer from '../slices/notesSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    notes: notesReducer,
  },
});

export default store;
