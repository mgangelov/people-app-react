import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './reducers/paginationReducer';
import peopleDataReducer from './reducers/peopleDataReducer';

export default configureStore({
  reducer: {
    peopleData: peopleDataReducer,
    pagination: paginationReducer
  }
});
