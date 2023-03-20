import { configureStore } from "@reduxjs/toolkit"
import displayReducer from "./slices/displaySlice"

const store = configureStore({

    reducer: {
        data: displayReducer,
    },

})

export default store