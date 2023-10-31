import { createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "../../thunk/admin/adAuth";

const initialState = {
  status: false,
};

const adminAuthSlice = createSlice({
  name: "adminAuthSlice",
  initialState: initialState,
  reducers: {
    someAsyncAction: (state, action) => {
      // Update your state here with the action payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        // state.loading = false;
        // state.data = action.payload;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.payload;
      });
  },
});

export const { someAsyncAction } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
