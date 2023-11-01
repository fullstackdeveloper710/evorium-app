import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../thunk/admin/adAuth";

const initialState = {
  loading: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState: initialState,
  reducers: {
    showLoader: (state, action) => {
      state.loading = true;
    },
    hideLoader: (state, action) => {
      state.loading = false;
    },
  },
});

export const { showLoader, hideLoader } = appSlice.actions;
export default appSlice.reducer;
