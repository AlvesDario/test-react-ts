import { configureStore } from '@reduxjs/toolkit';
// import reducers from './redux';
import itemReducer from './features/item';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    itemReducer,
  },
  middleware: [thunk]
});

export default store;
export type TStore = ReturnType<typeof store.getState>;