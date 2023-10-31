import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../thunk/admin/adMain";

const initialState = {
  status: false,
};

const adminMain = createSlice({
  name: "adminMain",
  initialState: initialState,
  reducers: {
    someAsyncAction: (state, action) => {
      // Update your state here with the action payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        // state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
      });
  },
});

export const { someAsyncAction } = adminMain.actions;
export default adminMain.reducer;
