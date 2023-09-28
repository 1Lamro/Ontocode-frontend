import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/applicationSlice";
import userSlice from "../features/userSlice";
import  priceSlice  from "../features/priceSlice";
// import imagesSlice from "../features/imagesSlice";
import courseSlice from "../features/courseSlice";
import  chatSlise  from "../features/chatSlice";
import taskSlice from "../features/taskSlice";


export const store = configureStore({
    reducer: {
        application: applicationSlice,
        user: userSlice,
        // image: imagesSlice,
        price: priceSlice,
        course: courseSlice,
        chat: chatSlise,
        task: taskSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch