import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeReducer";
import detailReducer from "./detailReducer";

const store = configureStore({
    reducer: {
        home: homeReducer,
        detail: detailReducer,
    }
})

export default store;