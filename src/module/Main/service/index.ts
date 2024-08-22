import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {OPENWEATHERMAP_API_KEY} from "../../../core/constants";
import {IGeocoding, IWeather} from "../models";
import {ErrorMessageType} from "../../../core/models";

export const getCities = createAsyncThunk<
    IWeather[],
    string,
    { rejectValue: ErrorMessageType }
>(
  'cities/getCities',
  async (city, { rejectWithValue }) => {
    try {
      const { data: geocodingData } = await axios.get<IGeocoding[]>(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${OPENWEATHERMAP_API_KEY}`);

      if (geocodingData.length === 0) {
        return rejectWithValue({message: 'No cities found for the given query'});
      }

      const citiesData: IWeather[] = await Promise.all(geocodingData.map(async (city) => {
        const { lat, lon } = city;
        const { data } = await axios.get<IWeather>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`);
        return data;
      }));

      return citiesData;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
