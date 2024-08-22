import { createSlice } from "@reduxjs/toolkit";
import { getCities } from "../service";
import {ApiStatusState} from "../../../core/models";
import {IWeather} from "../models";
import {LoadingStage} from "../../../core/enum";
import {initialApiState} from "../../../core/constants";

export interface InitialState {
  weather: ApiStatusState<IWeather[]>;
}

const initialState: InitialState = {
  weather: {
    ...initialApiState,
    apiData: []
  }
};

const mainPageSlice = createSlice({
  name: 'mainPageSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state) => ({
        ...state,
        weather: {
          ...state.weather,
          apiData: [],
          apiStatus: LoadingStage.LOADING,
        },
      }))
      .addCase(getCities.fulfilled, (state, {payload}) => ({
        ...state,
        weather: {
          ...state.weather,
          apiData: payload,
          apiStatus: LoadingStage.LOAD,
        },
      }))
      .addCase(getCities.rejected, (state, {payload}) => ({
        ...state,
        weather: {
          ...state.weather,
          apiStatus: LoadingStage.LOAD,
          apiError: payload || null,
        },
      }));
  }
});

export default mainPageSlice.reducer;
