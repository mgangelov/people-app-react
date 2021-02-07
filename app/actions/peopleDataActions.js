import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as actionTypes from '../constants/actionTypes';

export const loadPeopleData = createAction(actionTypes.LOAD_PEOPLE_DATA);
export const fetchPeopleData = createAsyncThunk(
  actionTypes.PEOPLE_DATA_LOADING,
  async (peopleJsonDataFile) => fetch(
    peopleJsonDataFile,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  ).then((response) => response.json())
);
