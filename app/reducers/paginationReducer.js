import { createReducer } from '@reduxjs/toolkit';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  resultsPerPage: 15,
  currentPage: 1,
  maxPage: 0,
  currentPageData: [],
  currentPageDataLoadingStatus: 'fulfilled'
};

export default createReducer(initialState, {
  [actionTypes.SET_RESULTS_PER_PAGE]: (state, action) => {
    state.resultsPerPage = action.payload;
  },
  [actionTypes.SET_CURRENT_PAGE]: (state, action) => {
    state.currentPage = action.payload;
  },
  [actionTypes.SET_MAX_PAGE]: (state, action) => {
    state.maxPage = Math.ceil(action.payload / state.resultsPerPage);
  },
  [`${actionTypes.SET_CURRENT_PAGE_DATA}/pending`]: (state, action) => {
    state.currentPageDataLoadingStatus = 'pending';
  },
  [`${actionTypes.SET_CURRENT_PAGE_DATA}/fulfilled`]: (state, action) => {
    state.currentPageData = action.payload;
    state.currentPageDataLoadingStatus = 'fulfilled';
  }
});
