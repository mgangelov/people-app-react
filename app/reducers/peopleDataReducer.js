import { createReducer } from '@reduxjs/toolkit';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  data: [],
  dataLoadingStatus: 'pending'
};

export default createReducer(initialState, {
  [actionTypes.LOAD_PEOPLE_DATA]: (state, action) => {
    state.data = action.payload.data;
  },
  [`${actionTypes.PEOPLE_DATA_LOADING}/fulfilled`]: (state, action) => {
    state.data = action.payload;
    state.dataLoadingStatus = 'fulfilled';
  }
});
