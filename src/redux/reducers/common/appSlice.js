import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../thunk/admin/adAuth";

const initialState = {
  rootLoader: false,
  loader: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState: initialState,
  reducers: {
    showRootLoader: (state, action) => {
      state.rootLoader = true;
    },
    hideRootLoader: (state, action) => {
      state.rootLoader = false;
    },
    showLoader: (state, action) => {
      state.loading = true;
    },
    hideLoader: (state, action) => {
      state.loading = false;
    },
  },
});

export const { showRootLoader, hideRootLoader, showLoader, hideLoader } =
  appSlice.actions;
export default appSlice.reducer;
