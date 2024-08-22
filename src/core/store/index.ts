import {configureStore} from "@reduxjs/toolkit";
import mainPageSlice from '../../module/Main/slices/index.ts'

export const rootStore = () =>
    configureStore({
      reducer: {
        weather: mainPageSlice
      },
      devTools: true,
})

export type AppStore = ReturnType<typeof rootStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']