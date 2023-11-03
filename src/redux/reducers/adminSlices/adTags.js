import { createSlice } from "@reduxjs/toolkit";
import { getAdminTags } from "../../thunk/admin/adTags";

const initialState = {
  adminTags: {
    data: [],
  },
};

const adminTagsSlice = createSlice({
  name: "adminTagsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminTags.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(getAdminTags.fulfilled, (state, action) => {
        const { payload } = action;
        state.adminTags = payload;
        state.status = true;
      })
      .addCase(getAdminTags.rejected, (state, action) => {
        state.status = false;
      });
  },
});

export const {} = adminTagsSlice.actions;
export default adminTagsSlice.reducer;
