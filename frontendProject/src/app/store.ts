import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/applicationSlice";
import { priceSlice } from "../features/priceSlice";

export const store = configureStore({
    reducer: {
        application: applicationSlice,
        price: priceSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch