import { configureStore } from "@reduxjs/toolkit";
import venueListSlice from "../slices/venueListSlice";

const store = configureStore({
  reducer: {
    venueList: venueListSlice,
  },
});

export default store;
