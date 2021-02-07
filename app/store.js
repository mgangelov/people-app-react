import { configureStore } from '@reduxjs/toolkit';
import peopleDataReducer from './reducers/peopleDataReducer';

export default configureStore({
  reducer: {
    peopleData: peopleDataReducer
  }
});
