import {ApiStatusState} from "../models";

export const OPENWEATHERMAP_API_KEY = '7ef8d5793c1cc08f82f1a854934d27aa';

export const initialApiState: ApiStatusState<null> = {
    apiData: null,
    apiStatus: null,
    apiError: null,
};