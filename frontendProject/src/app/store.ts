import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/applicationSlice";
import userSlice from "../features/userSlice";
import { priceSlice } from "../features/priceSlice";

export const store = configureStore({
    reducer: {
        application: applicationSlice,
        user: userSlice,
        price: priceSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch