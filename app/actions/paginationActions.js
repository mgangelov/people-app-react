import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as actionTypes from '../constants/actionTypes';

export const setResultsPerPage = createAction(actionTypes.SET_RESULTS_PER_PAGE);
export const setCurrentPage = createAction(actionTypes.SET_CURRENT_PAGE);
export const setMaxPage = createAction(
  actionTypes.SET_MAX_PAGE
);
export const setCurrentPageData = createAsyncThunk(
  actionTypes.SET_CURRENT_PAGE_DATA,
  async (_, thunkAPI) => {
    const { getState } = thunkAPI;
    const { currentPage, resultsPerPage } = getState().pagination;
    const { data: peopleData } = getState().peopleData;
    const result = peopleData.slice(
      (currentPage - 1) * resultsPerPage,
      currentPage * resultsPerPage
    );
    return result;
  }
);
