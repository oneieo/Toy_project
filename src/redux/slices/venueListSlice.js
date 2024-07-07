import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  venues: [],
};

const venuesSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {
    loadVenues: (state, action) => {
      state.venues = action.payload;
    },
  },
});

export const { loadVenues } = venuesSlice.actions;
export default venuesSlice.reducer;
